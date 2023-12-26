import "./index.css";

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import NavigationMenu from "./components/NavigationMenu";
import AppContextProvider from "./contexts/AppContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
            <Toaster position="bottom-center" />
            <Tooltip id="app-tooltip" />
            <NavigationMenu />
        </AppContextProvider>
    </React.StrictMode>
);
