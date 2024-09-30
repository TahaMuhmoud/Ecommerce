import { FaStar } from "react-icons/fa";
import { CartItem as CartItemType } from "../../services/cart";
import RemoveFromCartButton from "../Product/RemoveFromCartButton";
import IncDecQuantity from "../ProductPage/IncDecQuantity";
import LazyImg from "../../components/LazyImg";
import { ProductInterface } from "../../types/types";
import { useUpdateQuantityInCart } from "../../hooks/Product/useUpdateQuantityInCart";

const CartProduct = ({ product }: { product: CartItemType }) => {
  const { mutate: updateQuantity, isPending: isUpdating } =
    useUpdateQuantityInCart();
  const handleDecrease = (count: number, product: ProductInterface) => {
    updateQuantity({ productId: product._id, count });
  };
  const handleIncrease = (count: number, product: ProductInterface) => {
    updateQuantity({ productId: product._id, count });
  };
  return (
    <div className="border-b-[1px] border-secondary/50 p-3 flex flex-col md:flex-row justify-between gap-y-5 gap-x-2">
      <div className="md:w-7/12 flex flex-col sm:flex-row gap-2">
        <div className="sm:w-1/7 max-w-20">
          <LazyImg
            src={product.product.imageCover}
            className="w-full h-full object-scale-down"
          />
        </div>
        <div className="sm:w-6/7 flex flex-col">
          <h5 className="text-2xl font-bold">{product.product.title}</h5>
          <div className="flex gap-2 items-center text-secondary/40">
            <span className="">{product.product.category.name}</span>/
            <span className="">{product.product.brand.name}</span>/
            <div className="flex items-center gap-1">
              <span className="">{product.product.ratingsAverage}</span>{" "}
              <FaStar className="fill-yellow-400" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-4/12 flex justify-center gap-2">
        <div className="w-2/4 flex md:justify-end">
          <div className="w-fit">
            <IncDecQuantity
              quantity={product.count}
              handleDecrease={(count) => handleDecrease(count, product.product)}
              handleIncrease={(count) => handleIncrease(count, product.product)}
              isUpdating={isUpdating}
            />
          </div>
        </div>
        <div className="w-2/4 flex flex-col md:items-end gap-1">
          <span className="text-2xl font-bold">
            {product.price * product.count}£
          </span>
          <span className="text-secondary/40">{product.price}£ /1</span>
        </div>
      </div>
      <div className="md:w-1/12">
        <RemoveFromCartButton product={product.product} />
      </div>
    </div>
  );
};

export default CartProduct;
