import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

/* 1 — CSS custom properties (--rose, --rose-hi, --muted, etc.) */
import "./styles/variables.css";

/* 2 — Tailwind base + utilities */
import "./styles.css";

/* 3 — Component-level visual styles (animations, card effects, cursor, orbs …) */
import "./styles/global.css";

/* 4 — Responsive breakpoint overrides — must come last so they win */
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
