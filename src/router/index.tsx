import { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import Login from "page/Login";
import NotFound from "page/NotFound";
import Layout from "@/layout";

const ObjModal = lazy(() => import("views/ObjectModal"));
const ViewManagement = lazy(() => import("views/ViewManagement"));
const UserList = lazy(() => import("@/views/system/user"));

export interface IRouteOption extends Omit<RouteObject, "children"> {
  mate?: {
    title?: string;
    isLayout?: boolean;
  };
  children?: IRouteOption[];
}

let routes: IRouteOption[] = [
  {
    path: "/",
    element: <Navigate to={"login"}></Navigate>
  },
  {
    path: "/login",
    element: <Login />
  },

  {
    path: "*",
    element: <NotFound />
  }
];
const authRoutes: IRouteOption[] = [
  {
    path: "/main",
    element: <Layout />,
    mate: {
      title: "主页",
      isLayout: true
    },
    children: [
      {
        index: true,
        element: <Navigate to="object-modal" />
      },
      {
        path: "object-modal",
        element: <ObjModal />,
        mate: {
          title: "对象模型"
        }
      },
      {
        path: "view-management",
        element: <ViewManagement />,
        mate: {
          title: "视图管理"
        }
      }
    ]
  },
  {
    path: "/system",
    element: <Layout />,
    mate: {
      title: "系统管理",
      isLayout: true
    },
    children: [
      {
        index: true,
        element: <Navigate to="user" />
      },
      {
        path: "user",
        element: <UserList />,
        mate: {
          title: "用户管理"
        }
      }
    ]
  }
];

routes = routes.concat(authRoutes);

export default routes;

export { authRoutes };
