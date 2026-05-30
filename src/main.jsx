import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConfessionProvider } from "./context/ConfessionContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfessionProvider>
      <App />
    </ConfessionProvider>
  </React.StrictMode>
);