import { useEffect, useState } from "react";

const KEY = "theme"; // shared by the home and project pages

// Light by default; the choice is remembered. Also tints the page background so
// overscroll/bounce areas match the theme.
export function useTheme() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem(KEY) === "dark"; } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem(KEY, dark ? "dark" : "light"); } catch { /* storage unavailable */ }
    const root = document.documentElement;
    const prev = root.style.backgroundColor;
    root.style.backgroundColor = dark ? "#10182b" : "";
    return () => { root.style.backgroundColor = prev; };
  }, [dark]);

  return [dark, () => setDark((d) => !d)];
}
