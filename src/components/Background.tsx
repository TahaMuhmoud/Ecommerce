import { ColorMode } from "../types/types";
import useMode from "../hooks/ContextHooks/useMode";

const Background = () => {
  const { colorMode } = useMode();
  return (
    <div className="w-full h-full flex absolute top-0 left-0 -z-50">
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className={`w-1/12 transition-all bg-primary duration-[1s] ease-background ${
            colorMode == ColorMode.DARK ? "h-full" : "h-0"
          }`}
          style={{
            transitionDelay: `${i * 50}ms`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;
