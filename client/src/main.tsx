import { createRoot, hydrateRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import App from "./App";
import "./index.css";
import { setupConversionTracking, setupGoogleAnalytics } from "./lib/analytics";

inject();
setupGoogleAnalytics();
setupConversionTracking();

const root = document.getElementById("root")!;
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
