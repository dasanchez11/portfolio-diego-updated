import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/home/home.page";
import "./styles.scss";

const container = document.getElementById("app-root")!;
const root = createRoot(container);
root.render(
  <div className="page">
    <HomePage />
  </div>
);
