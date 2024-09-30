import { useNavigate } from "react-router-dom";
import LazyImg from "../../components/LazyImg";

interface DiscountBanner {
  discount?: number;
  text: string;
  backImg: string;
  navTo?: string;
}
const DiscountBanner = ({ backImg, discount, text, navTo }: DiscountBanner) => {
  const nav = useNavigate();
  return (
    <div
      className={`text-white text-center place-content-center py-5 w-full max-h-72 relative`}
    >
      <LazyImg
        src={backImg}
        alt=""
        className="w-full h-full object-cover object-right absolute top-0 left-0 -z-10"
      />
      <div className="flex flex-wrap items-center justify-evenly">
        {<div className="text-8xl font-black italic">{discount}%</div>}
        <div className="flex flex-col gap-5 items-center justify-evenly">
          <h3 className="text-3xl font-bold">{text}</h3>
          {navTo && (
            <button
              className="w-fit color-main text-sm sm:text-lg md:text-xl font-bold px-4 py-1 rounded-full"
              onClick={() => nav(navTo)}
            >
              Shop Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
