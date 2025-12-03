import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CALCULATOR from "./Calculator.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <CALCULATOR />
  </StrictMode>
);
