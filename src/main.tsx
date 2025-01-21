import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "normalize.css";
import "./style/index.less";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);

