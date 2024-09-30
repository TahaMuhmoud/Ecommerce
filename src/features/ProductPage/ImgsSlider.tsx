import { MutableRefObject, useEffect, useRef, useState } from "react";
import LazyImg from "../../components/LazyImg";

const ImgsSlider = ({ images }: { images: string[] }) => {
  const [indx, setIndx] = useState<number>(0);
  const interval = useRef<number>() as MutableRefObject<number>;

  useEffect(() => {
    interval.current = setInterval(() => {
      setIndx((prevIndx) => {
        if (prevIndx < images.length - 1) {
          return prevIndx + 1;
        } else return 0;
      });
    }, 2000);

    return () => clearInterval(interval.current);
  }, [indx, images.length]);
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5 overflow-hidden">
      <div className="flex md:flex-col gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className={`w-10 sm:w-12 lg:w-14 xl:w-16 aspect-square border border-secondary rounded-md overflow-hidden bg-blu-500 cursor-pointer ${
              indx == i ? "grayscale-[100] border-2" : ""
            }`}
            onClick={() => {
              clearInterval(interval.current);
              setIndx(i);
            }}
            onMouseEnter={() => {
              setIndx(i);
            }}
          >
            <LazyImg
              src={img}
              alt={""}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="bg-white w-full  aspect-square overflow-hidden border border-secondary">
        <LazyImg
          src={images[indx]}
          alt=""
          className="w-full h-full object-scale-down mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default ImgsSlider;
