import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import App3 from "./app3.jsx";
import App4 from "./App4.jsx";
import { BrowserRouter } from "react-router-dom";
import App5 from "./App5.jsx";
import App6 from "./App6.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/deploy">
      <App6></App6>
    </BrowserRouter>
  </StrictMode>
);
