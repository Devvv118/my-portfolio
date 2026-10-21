// Fire-and-forget usage tracking. Never throws and never blocks the UI.
const API = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "");

function send(path, body) {
  try {
    // keepalive lets the request finish even when the click opens a new tab or navigates away.
    fetch(`${API}/api/track/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* tracking must never break the page */
  }
}

export const trackTheme = (to) => send("theme", { to });

// action: "open" (project card) | "github" | "live"
export const trackProject = (slug, action) => send("project", { slug, action });
