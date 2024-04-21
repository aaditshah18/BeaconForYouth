import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/login": {
        target: "http://localhost:3009/api/v1/login/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/login/, ""),
      },
    },
  },
});
