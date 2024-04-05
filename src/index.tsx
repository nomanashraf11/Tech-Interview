import React from "react";
import ReactDOM from "react-dom/client";
import { AppController } from "./application";
import "./index.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppController />
  </React.StrictMode>
);
