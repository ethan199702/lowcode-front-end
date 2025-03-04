import IconFont from "@/components/IconFont";
import { useAppStore } from "store/modules/useAppStore.ts";

const NavBar = () => {
  const { theme, toggleTheme } = useAppStore();
  const handleChangeTheme = (theme: "dark" | "light") => {
    toggleTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className="w-full h-full flex justify-between">
      <div></div>
      <div>
        {theme === "light" ? (
          <IconFont
            className="icon-yejianmoshi"
            onClick={() => handleChangeTheme("dark")}
          ></IconFont>
        ) : (
          <IconFont
            className="icon-rijianmoshixhdpi"
            onClick={() => handleChangeTheme("light")}
          ></IconFont>
        )}
      </div>
    </div>
  );
};

export default NavBar;
