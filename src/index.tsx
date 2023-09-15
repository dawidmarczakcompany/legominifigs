import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const run = async () => {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    return;
  }

  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

run();
