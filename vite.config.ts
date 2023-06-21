import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
    build: {
        emptyOutDir: true,
        manifest: "assets.json",
        rollupOptions: {
            input: [path.resolve(__dirname, "src", "contentscripts", "color-scanner.ts"), path.resolve(__dirname, "index.html")],
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            },
        },
    },
    plugins: [react()],
});
