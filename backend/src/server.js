import "dotenv/config";
import { timingSafeEqual } from "node:crypto";
import express from "express";
import cors from "cors";
import { getStats, recordProject, recordTheme } from "./store.js";

const app = express();

// CORS_ORIGIN: comma-separated list of allowed frontends (e.g. your Vercel URL). Unset = allow all.
const origins = process.env.CORS_ORIGIN?.split(",").map((s) => s.trim()).filter(Boolean);
app.use(cors({ ...(origins?.length ? { origin: origins } : {}), allowedHeaders: ["Content-Type", "x-stats-key"] }));
app.use(express.json({ limit: "1kb" }));

app.get("/", (_, res) => {
    res.send("Server Healthy");
});

app.get("/api/health", (_, res) => {
    res.json({
        message: "Server online"
    });
});

// Light per-IP throttle so the public tracking endpoint can't be hammered.
const hits = new Map();
const LIMIT = 60; // events per minute per IP
function throttle(req, res, next) {
    const key = req.ip ?? "unknown";
    const now = Date.now();
    let h = hits.get(key);
    if (!h || h.reset < now) hits.set(key, (h = { n: 0, reset: now + 60_000 }));
    if (++h.n > LIMIT) return res.status(429).json({ error: "Too many events" });
    next();
}
setInterval(() => {
    const now = Date.now();
    for (const [k, v] of hits) if (v.reset < now) hits.delete(k);
}, 60_000).unref();

const PROJECT_ACTIONS = ["open", "github", "live"];
const SLUG = /^[a-z0-9-]{1,60}$/;

// POST /api/track/theme    { "to": "dark" | "light" }
app.post("/api/track/theme", throttle, async (req, res) => {
    const to = req.body?.to;
    if (to !== "dark" && to !== "light") return res.status(400).json({ error: "to must be 'dark' or 'light'" });
    await recordTheme(to);
    res.status(204).end();
});

// POST /api/track/project  { "slug": "data-analyst-agent", "action": "open" | "github" | "live" }
app.post("/api/track/project", throttle, async (req, res) => {
    const { slug, action } = req.body ?? {};
    if (typeof slug !== "string" || !SLUG.test(slug)) return res.status(400).json({ error: "invalid slug" });
    if (!PROJECT_ACTIONS.includes(action)) return res.status(400).json({ error: "invalid action" });
    if (!(await recordProject(slug, action))) return res.status(400).json({ error: "too many projects" });
    res.status(204).end();
});

// GET /api/stats — your numbers. If STATS_KEY is set, send it as the x-stats-key header (or ?key=).
// Other sites (e.g. your email dashboard) can read it too: add their origin to CORS_ORIGIN.
const sameKey = (given, expected) => {
    if (typeof given !== "string") return false;
    const a = Buffer.from(given);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
};

app.get("/api/stats", async (req, res) => {
    const key = process.env.STATS_KEY;
    if (key && !sameKey(req.get("x-stats-key"), key) && !sameKey(req.query.key, key)) {
        return res.status(401).json({ error: "unauthorized" });
    }
    res.set("Cache-Control", "no-store");
    res.json(await getStats());
});

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
