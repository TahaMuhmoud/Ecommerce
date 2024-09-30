import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
export const MenuContext = createContext<{
  isMenuOpened: boolean;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
}>({ isMenuOpened: false, toggleMenu: () => {} });
const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<boolean>(false);
  return (
    <MenuContext.Provider value={{ isMenuOpened: state, toggleMenu: setState }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
