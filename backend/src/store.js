import { promises as fs } from "node:fs";
import path from "node:path";

// Tiny JSON-file store. Everything is a counter, so a single small file is plenty.
// Set DATA_DIR to a persistent disk in production (Render's free disk is wiped on redeploy).
const DATA_DIR = process.env.DATA_DIR ?? path.resolve(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "stats.json");

// Shape:
//   { theme: { toDark, toLight }, projects: { [slug]: { open, github, live } } }
// where each counter is { count: number, lastAt: ISO string | null }.
// Project actions: "open" (card click), "github", "live".

const counter = () => ({ count: 0, lastAt: null });
const emptyProject = () => ({ open: counter(), github: counter(), live: counter() });
const emptyStats = () => ({
    theme: { toDark: counter(), toLight: counter() },
    projects: {},
});

let stats = emptyStats();
let ready = null;
let writing = Promise.resolve();
let dirty = false;

function load() {
    ready ??= (async () => {
        await fs.mkdir(DATA_DIR, { recursive: true });
        try {
            const saved = JSON.parse(await fs.readFile(FILE, "utf8"));
            const base = emptyStats();
            stats = {
                theme: { ...base.theme, ...saved.theme },
                projects: saved.projects ?? {},
            };
        } catch {
            stats = emptyStats(); // first run, or unreadable file
        }
    })();
    return ready;
}

// Writes are serialised and coalesced; temp file + rename so a crash never leaves half a file.
function persist() {
    dirty = true;
    writing = writing.then(async () => {
        if (!dirty) return;
        dirty = false;
        const tmp = `${FILE}.tmp`;
        await fs.writeFile(tmp, JSON.stringify(stats, null, 2));
        await fs.rename(tmp, FILE);
    }).catch((err) => console.error("Could not save stats:", err));
}

const bump = (c) => {
    c.count += 1;
    c.lastAt = new Date().toISOString();
};

export async function recordTheme(to) {
    await load();
    bump(to === "dark" ? stats.theme.toDark : stats.theme.toLight);
    persist();
}

const MAX_PROJECTS = 100; // guards the file against junk slugs

export async function recordProject(slug, action) {
    await load();
    let p = stats.projects[slug];
    if (!p) {
        if (Object.keys(stats.projects).length >= MAX_PROJECTS) return false;
        p = stats.projects[slug] = emptyProject();
    }
    bump(p[action]);
    persist();
    return true;
}

export async function getStats() {
    await load();
    return {
        ...stats,
        totals: { themeSwitches: stats.theme.toDark.count + stats.theme.toLight.count },
    };
}
