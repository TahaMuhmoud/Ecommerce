import { BsStarFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import AddToCart from "../Product/AddToCart";
import AddToFav from "../Product/AddToFav";
import ImgsSection from "../Product/ImgsSection";
import { ProductInterface } from "../../types/types";
import { cn } from "../../utils/helpers";

interface ProductProps {
  index: number;
  product: ProductInterface;
  className?: string;
}
const Product = ({ product, index, className }: ProductProps) => {
  const nav = useNavigate();

  return (
    <div
      className={cn(
        `w-full pb-5 relative overflow-hidden group bg-[#eee] text-black`,
        className
      )}
    >
      <div
        className={`grid gap-2 border-secondary/50  p-0 ${
          index % 2 === 0 ? "pl-6" : "pr-6"
        }`}
      >
        <ImgsSection index={index} product={product} />
        <div
          className={`flex flex-col gap-1 ${
            index % 2 === 0 ? "pl-0 pr-6" : "pl-6"
          }`}
        >
          <h5
            className="text-sm sm:text-base font-bold line-clamp-1 hover:underline underline-offset-4 cursor-pointer"
            onClick={() => {
              nav(`/product/${product.id}`, {
                state: product,
              });
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {product.title}
          </h5>
          <div className="flex items-center gap-1">
            <BsStarFill className="text-yellow-400" />
            <span>{product.ratingsAverage}</span>
          </div>
          <div className="flex flex-wrap items-end justify-end gap-2 text-sm">
            {product.priceAfterDiscount && (
              <span className="line-through text-black/20">
                {product.price} LE
              </span>
            )}
            <span className="p-1 rounded-md color-main text-sm">
              {product.priceAfterDiscount
                ? product.priceAfterDiscount
                : product.price}{" "}
              £
            </span>
          </div>
        </div>
        <div
          className={` flex flex-col gap-2 absolute top-1/3 -translate-y-1/2 transition-all duration-500 ${
            index % 2 === 0
              ? "right-0 translate-x-full group-hover:translate-x-0"
              : "left-0 -translate-x-full group-hover:translate-x-0"
          }`}
        >
          <AddToCart
            disabled={!product.quantity || product.quantity == 0}
            product={product}
            className="p-2"
          />
          <AddToFav product={product} className="p-2" />
        </div>
      </div>
    </div>
  );
};

export default Product;
