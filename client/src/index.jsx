import React from "react";
import App from "./components/App.jsx";

import { createRoot } from "react-dom/client";
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);
