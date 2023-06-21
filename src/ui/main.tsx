import "./index.css";

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
        <Toaster position="bottom-center" />
    </React.StrictMode>
);
