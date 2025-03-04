import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
const aliasPath = {
  "@antd-core/utils/src": path.resolve(
    __dirname,
    "D:/Users/Hjx19/Desktop/project/antd-core/packages/utils/src"
  ),
  "@antd-core/utils": path.resolve(
    __dirname,
    "D:/Users/Hjx19/Desktop/project/antd-core/packages/utils/src"
  ),
  "@antd-core/component-pro/components": path.resolve(
    __dirname,
    "D:/Users/Hjx19/Desktop/project/antd-core/packages/component-pro/components"
  ),
  "@antd-core/component-pro": path.resolve(
    __dirname,
    "D:/Users/Hjx19/Desktop/project/antd-core/packages/component-pro/components"
  ),
  "@antd-core/components/src": path.resolve(
    __dirname,
    "D:/Users/Hjx19/Desktop/project/antd-core/packages/components/src"
  ),
  "@antd-core/components": path.resolve(
    __dirname,
    "D:/Users/Hjx19/Desktop/project/antd-core/packages/components/src"
  ),
  "@antd-core/context/src": path.resolve(
    __dirname,
    "D:/Users/Hjx19/Desktop/project/antd-core/packages/context/src"
  ),
  "@antd-core/context": path.resolve(
    __dirname,
    "D:/Users/Hjx19/Desktop/project/antd-core/packages/context/src"
  ),
  "@antd-core/hooks/src": path.resolve(
    __dirname,
    "D:/Users/Hjx19/Desktop/project/antd-core/packages/hooks/src"
  ),
  "@antd-core/hooks": path.resolve(
    __dirname,
    "D:/Users/Hjx19/Desktop/project/antd-core/packages/hooks/src"
  )
};
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
      layout: path.resolve(__dirname, "src/layout"),
      ...aliasPath
    }
  },
  server: {
    host: "0.0.0.0",
    open: true,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
});

