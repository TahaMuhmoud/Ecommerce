import LazyImg from "../../components/LazyImg";
import { CartItem } from "../../services/cart";

const OrderProduct = ({
  product: { count, price, product },
}: {
  product: CartItem;
}) => {
  return (
    <div className="w-full border mb-5 flex items-center gap-2 p-2">
      <div className="min-w-10 max-w-14">
        <LazyImg src={product.imageCover} />
      </div>
      <div className="w-full flex flex-col justify-evenly gap-1">
        <h4 className="sm:text-xl font-bold line-clamp-2">{product.title}</h4>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <p className="font-bold">Quantity: {count}</p>
          <div className="flex items-end gap-3">
            <span className="text-secondary/40">{price}£ /1</span>
            <span className="text-2xl font-bold">{price * count}£</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
