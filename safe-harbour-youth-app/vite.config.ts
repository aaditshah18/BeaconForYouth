import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const domain = process.env.REACT_APP_API_DOMAIN || "http://localhost:3005";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/login": {
        target: `${domain}/api/v1/login/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/login/, ""),
      },
      "/ngos/create": {
        target: `${domain}/api/v1/ngos/list/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ngos\/create/, ""),
      },
      "/ngos": {
        target: `${domain}/api/v1/ngos/list/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ngos/, ""),
      },
      "/complaintform": {
        target: `${domain}/api/v1/complaints/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/complaintform/, ""),
      },
    },
  },
});
