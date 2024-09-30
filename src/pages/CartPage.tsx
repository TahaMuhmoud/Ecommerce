import { BsArrowLeft } from "react-icons/bs";

import CartDetails from "../features/Cart/CartDetails";
import CartProduct from "../features/Cart/CartProduct";
import { useCart } from "../hooks/Cart/useCart";

const CartPage = () => {
  const { data: cartData, isLoading: isLoadingCart } = useCart();

  if (!cartData || isLoadingCart) return <div className="">Loading ...</div>;
  return (
    <div className="w-full min-h-screen flex flex-col gap-5">
      <div className="flex items-center gap-2 w-fit">
        <BsArrowLeft />
        <span>Back</span>
      </div>
      <div className="">
        <h2 className="text-5xl sm:text-7xl font-extralight">YOUR CART</h2>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-5">
        <div className="w-full lg:w-2/3">
          {cartData.numOfCartItems > 0 ? (
            <>
              {cartData.data.products.map((product, i) => (
                <CartProduct key={i} product={product} />
              ))}
            </>
          ) : (
            <div className="text-5xl sm:text-6xl md:text-8xl text-center font-black min-h-52 flex items-center justify-center">
              YOUR CART IS EMPTY
            </div>
          )}
        </div>
        <div className="w-px bg-secondary"></div>
        <div className="w-full lg:w-1/3">
          <CartDetails cartData={cartData} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
