import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  WordContextProvider
} from "./context/WordContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WordContextProvider>
      <App />
    </WordContextProvider>
  </StrictMode>
);
