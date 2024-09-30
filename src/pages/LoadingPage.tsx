import { BounceLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden grid place-items-center bg-primary text-clr-main">
      <BounceLoader size={50} color="#001b68" />
    </div>
  );
};

export default LoadingPage;
