import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
const useMenu = () => {
  const menu = useContext(MenuContext);
  return menu;
};

export default useMenu;
