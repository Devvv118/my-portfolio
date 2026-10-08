const WARM_KEY = "warmed-servers";

function getServerUrls() {
  const urls = Object.entries(import.meta.env)
    .filter(([key]) => /^(vite_)?render_server/i.test(key))
    .map(([, value]) => String(value || "").trim())
    .filter((v) => /^https?:\/\//i.test(v));
  return [...new Set(urls)];
}

export function warmServers() {
  if (typeof window === "undefined") return;

  let already = [];
  try {
    already = JSON.parse(sessionStorage.getItem(WARM_KEY) || "[]");
  } catch {
    /* ignore */
  }

  const pending = getServerUrls().filter((u) => !already.includes(u));
  if (!pending.length) return;

  pending.forEach((url) => {
    // no-cors: we never read the response, and it avoids CORS errors in the console.
    // keepalive: request still goes out if the user navigates away immediately.
    fetch(url, { mode: "no-cors", cache: "no-store", keepalive: true }).catch(() => {});
  });

  try {
    sessionStorage.setItem(WARM_KEY, JSON.stringify([...already, ...pending]));
  } catch {
    /* ignore */
  }
}
