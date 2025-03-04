import { createRoot } from "react-dom/client";
import "normalize.css";
import "./style/index.less";

import Root from "./page/Root";

createRoot(document.getElementById("root")!).render(<Root />);

