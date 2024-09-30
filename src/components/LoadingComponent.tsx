import { BounceLoader } from "react-spinners";

const LoadingComponent = ({
  color,
  size,
}: {
  color?: string;
  size?: number;
}) => {
  return (
    <div className="min-w-full min-h-full grid place-items-center">
      <BounceLoader size={size || 25} color={color || `#001b68`} />
    </div>
  );
};

export default LoadingComponent;
