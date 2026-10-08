import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { warmServers } from "./utils/warmServers";

// Wake up backend servers (non-blocking, fire-and-forget)
warmServers();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
