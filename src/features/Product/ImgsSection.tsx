import { MutableRefObject, useEffect, useRef, useState } from "react";
import LazyImg from "../../components/LazyImg";
import { ProductInterface } from "../../types/types";
import { findDiscountPircent } from "../../utils/helpers";

interface ImgsSection {
  product: ProductInterface;
  index: number;
}
const ImgsSection = ({ product, index }: ImgsSection) => {
  let { images } = product;
  images = images.length > 5 ? images.slice(0, 5) : images;
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
    <div className={"relative w-full aspect-auto overflow-"}>
      <div
        className={`w-5 md:w-7 aspect-square  h-full flex flex-col justify-center gap-2 absolute top-1/2 -translate-y-1/2 z-10 ${
          index % 2 === 0
            ? "left-0 -translate-x-1/2"
            : "right-0 translate-x-1/2"
        }`}
      >
        {images.map((image, i) => (
          <div
            key={i}
            className={`w-full aspect-square rounded-full overflow-hidden border-2 border-primary outline outline-1 cursor-pointer ${
              indx == i ? "translate-x-1" : "outline-secondary "
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
              src={image}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
        ))}
      </div>

      {product.priceAfterDiscount !== undefined && (
        <div
          className={
            "color-main text-sm font-medium px-2 py-1 absolute top-0 right-4 z-10"
          }
        >
          {findDiscountPircent(
            product.price,
            Number(product.priceAfterDiscount)
          )}
          % off
        </div>
      )}

      <div className="aspect-[1/1.2] overflow-hidden h-full">
        <LazyImg
          src={images[indx]}
          alt=""
          className="w-full h-full object-scale-down -z-10 mix-blend-multiply"
        />
      </div>
    </div>
  );
};

export default ImgsSection;
