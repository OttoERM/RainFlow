import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  resolve: {
    alias: [
      { find: "scripts", replacement: resolve(__dirname, "./src/scripts/") },
    ],
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"),
        about: resolve(__dirname, "./src/about.html"),
        style: resolve(__dirname, "./src/style.css"),
      },
    },
  },
});
