import { lazy } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

const Login = lazy(() => import("page/Login"));
const NotFound = lazy(() => import("page/NotFound"));
const ObjModal = lazy(() => import("views/ObjectModal"));
const ViewManagement = lazy(() => import("views/ViewManagement"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"login"}></Navigate>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/object-modal",
    element: <ObjModal />
  },
  {
    path: "/view-management",
    element: <ViewManagement />
  },
  {
    path: "*",
    element: <NotFound />
  }
];

export default routes;
