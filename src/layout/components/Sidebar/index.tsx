import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Menu, type MenuProps } from "antd";
import { authRoutes, type IRouteOption } from "@/router";

//@ts-ignore
type MenuItem = Required<MenuProps>["items"]["number"];

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const formatMenu = useCallback(
    (list: IRouteOption[]): MenuItem[] => {
      return list
        .filter(route => route.index !== true) // 过滤掉 index 为 true 的项
        .map((route: IRouteOption) => {
          // 处理有 children 的情况
          const menuItem: MenuItem = {
            label: route.mate?.title,
            key: route.path
          };

          // 如果有子菜单
          if (route.children) {
            menuItem.children = formatMenu(route.children); // 递归处理子项
          }
          return menuItem;
        });
    },
    [authRoutes]
  );

  const menu: MenuItem = formatMenu(authRoutes);

  useEffect(() => {
    const pathArray = location.pathname.split("/");

    const firstPath = "/" + pathArray[1];

    const lastKey = pathArray[pathArray.length - 1];

    setOpenKeys([firstPath]);
    setSelectedKeys([lastKey]);
  }, [location.pathname]);

  const handleClickItem = ({ keyPath }: { keyPath: string[] }) => {
    const path = keyPath
      .map((k: string) => {
        if (!k.startsWith("/")) return "/" + k;
        return k;
      })
      .reverse()
      .join("");
    navigate(path);
  };

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };
  return (
    <Menu
      className=" w-full h-full overflow-auto"
      items={menu}
      mode="inline"
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onClick={handleClickItem}
      onOpenChange={handleOpenChange}
    ></Menu>
  );
};

export default SideBar;
