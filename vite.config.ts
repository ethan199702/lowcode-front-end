import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      style: path.resolve(__dirname, "src/style"),
      utils: path.resolve(__dirname, "src/utils"),
      store: path.resolve(__dirname, "src/store"),
      router: path.resolve(__dirname, "src/router"),
      hooks: path.resolve(__dirname, "src/hooks"),
      service: path.resolve(__dirname, "src/service"),
      views: path.resolve(__dirname, "src/views"),
      page: path.resolve(__dirname, "src/page"),
      layout: path.resolve(__dirname, "src/layout")
    }
  },
  server: {
    host: "0.0.0.0",
    open: true,
    proxy: {
      "/qomo": {
        target: "http://192.168.50.9:3008"
      }
    }
  }
});

