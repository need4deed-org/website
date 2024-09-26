import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./config/i18next.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
