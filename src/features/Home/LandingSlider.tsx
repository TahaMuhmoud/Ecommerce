import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import LazyImg from "../../components/LazyImg";
const LandingSlider = () => {
  const nav = useNavigate();
  return (
    <div className="w-full aspect-video min-h-[400px] max-h-[600px] p-5 relative flex items-center">
      <div className="flex flex-col gap-3 z-10">
        <h1 className="text-vbig">Sales Up To 75%</h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
          Get the best deals on your favorite products
        </h2>
        <CustomButton
          className="w-fit text-sm sm:text-lg md:text-xl font-bold px-4 py-1 rounded-full"
          onClick={() => nav("/shop")}
        >
          Shop Now
        </CustomButton>
      </div>

      <LazyImg
        src="/b17.jpg"
        className="w-full h-full object-cover object-right-bottom absolute top-0 left-0"
      />
    </div>
  );
};

export default LandingSlider;
