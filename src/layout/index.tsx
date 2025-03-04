import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Layout as AntdLayout } from "antd";

import NProgress from "./NProgress";
import { SideBar, NavBar } from "./components";
import "nprogress/nprogress.css";
import styles from "./index.module.less";

const { Sider, Header, Content } = AntdLayout;
const Layout = () => {
  return (
    <AntdLayout className="w-full h-full">
      <Sider>
        <SideBar />
      </Sider>
      <AntdLayout>
        <Header className={styles.page_header}>
          <NavBar />
        </Header>
        <Suspense fallback={<NProgress />}>
          <Content className="h-full overflow-auto">
            <Outlet />
          </Content>
        </Suspense>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
