import "@vitejs/plugin-react/preamble";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("react-portfolio");

console.log("React mount:", root);

if (root) {
    createRoot(root).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}