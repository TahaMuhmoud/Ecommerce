import { FaMoon } from "react-icons/fa";
import useMode from "../hooks/ContextHooks/useMode";
import { ColorMode } from "../types/types";
import CustomButton from "./CustomButton";

const ModeToggle = () => {
  const { colorMode, setColorMode } = useMode();
  return (
    <CustomButton
      className="p-3 md:p-5 fixed top-1/3 left-0 z-[10000000]"
      onClick={() => {
        if (colorMode == ColorMode.DARK) setColorMode(ColorMode.LIGHT);
        else setColorMode(ColorMode.DARK);
      }}
    >
      <FaMoon className="text-lg md:text-xl" />
    </CustomButton>
  );
};

export default ModeToggle;
