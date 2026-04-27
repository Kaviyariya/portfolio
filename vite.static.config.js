import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

export default defineConfig({
  base: "/personal_portfolio/",
  publicDir: "public",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "copy-index-html",
      apply: "build",
      writeBundle() {
        // Copy index-static.html to index.html for GitHub Pages
        const sourceFile = path.resolve(__dirname, "dist-static/index-static.html");
        const destFile = path.resolve(__dirname, "dist-static/index.html");
        if (fs.existsSync(sourceFile)) {
          fs.copyFileSync(sourceFile, destFile);
          console.log("✓ Copied index-static.html to index.html");
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index-static.html"),
      },
    },
  },
});
