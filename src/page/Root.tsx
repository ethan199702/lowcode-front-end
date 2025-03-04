import { HashRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import App from "@/App";
import { useAppStore } from "store/modules/useAppStore.ts";

const Root = () => {
  const { theme: themeStore } = useAppStore();

  return (
    <HashRouter>
      <ConfigProvider
        theme={{
          cssVar: true,
          algorithm:
            themeStore === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm
        }}
      >
        <App />
      </ConfigProvider>
    </HashRouter>
  );
};

export default Root;
