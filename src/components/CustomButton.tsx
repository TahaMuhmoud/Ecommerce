import { ReactNode } from "react";
import { cn } from "../utils/helpers";

const CustomButton = ({
  className,
  children,
  disabled,
  type,
  onClick = () => {},
}: {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}) => {
  return (
    <button
      className={cn(
        "color-main hover:bg-secondary/20 disabled:bg-secondary/20 cursor-pointer grid place-items-center",
        className
      )}
      type={type}
      disabled={disabled || false}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
