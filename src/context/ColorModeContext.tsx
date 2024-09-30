import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { ColorMode } from "../types/types";

export const ColorModeContext = createContext<{
  setColorMode: Dispatch<SetStateAction<ColorMode>>;
  colorMode: ColorMode;
}>({
  setColorMode: () => {},
  colorMode: ColorMode.LIGHT,
});

const ColorModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<ColorMode>(ColorMode.LIGHT);
  document.documentElement.className = state.toString();
  return (
    <ColorModeContext.Provider
      value={{
        colorMode: state,
        setColorMode: setState,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
