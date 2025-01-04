import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./index.css";
import App from "./App.tsx";
import { AppSettingsProvider } from "./Context/AppSettings.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppSettingsProvider>
      <App />
    </AppSettingsProvider>
  </StrictMode>
);
