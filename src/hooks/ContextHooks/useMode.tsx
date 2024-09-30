import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";

const useMode = () => {
  const mode = useContext(ColorModeContext);
  return mode;
};

export default useMode;
