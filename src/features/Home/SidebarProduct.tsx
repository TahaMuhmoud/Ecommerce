import { BsStarFill } from "react-icons/bs";
import LazyImg from "../../components/LazyImg";
import { ProductInterface } from "../../types/types";
import { useNavigate } from "react-router-dom";
interface SidebarProduct {
  product: ProductInterface;
}
const SidebarProduct = ({ product }: SidebarProduct) => {
  const nav = useNavigate();
  return (
    <div className="flex items-center bg-secondary/10 gap-2 p-2 max-h-[200px] overflow-hidden">
      <div className="w-1/3 aspect-square">
        <LazyImg
          src={product.imageCover}
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="h-full w-full">
        <h6
          className="font-semibold line-clamp-1 hover:underline underline-offset-4 cursor-pointer"
          onClick={() => {
            nav(`/product/${product.id}`, {
              state: product,
            });
          }}
        >
          {product.title}
        </h6>
        <div className="flex items-center gap-1">
          <BsStarFill className="text-yellow-400" />
          <span>{product.ratingsAverage}</span>
        </div>
        <div className="w-full text-end">
          <span className="color-main py-1 px-2">
            {product.priceAfterDiscount
              ? product.priceAfterDiscount
              : product.price}{" "}
            LE
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarProduct;
