import { FaCartShopping } from "react-icons/fa6";
import { ProductInterface } from "../../types/types";
import { cn } from "../../utils/helpers";
import CustomButton from "../../components/CustomButton";
import { useCart } from "../../hooks/Cart/useCart";
import { useAddToCart } from "../../hooks/Cart/useAddToCart";
import { useUpdateQuantityInCart } from "../../hooks/Product/useUpdateQuantityInCart";
import { BounceLoader } from "react-spinners";

const AddToCart = ({
  product,
  className,
  disabled,
}: {
  product: ProductInterface;
  className?: string;
  disabled?: boolean;
}) => {
  const { data } = useCart();
  const isInCart = data?.data.products.filter(
    (cartProduct) => cartProduct.product._id === product._id
  )[0];
  const countInCart = isInCart?.count;

  const { addToCart, isPending: isAdding } = useAddToCart();
  const { mutate: updateQuantity, isPending: isUpdating } =
    useUpdateQuantityInCart();
  const handleOnClick = () => {
    if (isInCart !== undefined) {
      updateQuantity({
        productId: product._id,
        count: Number(countInCart) + 1,
      });
    } else {
      addToCart(product._id);
    }
  };
  return (
    <CustomButton
      disabled={disabled || false}
      onClick={handleOnClick}
      className={cn(className)}
    >
      {isAdding || isUpdating ? (
        <BounceLoader size={25} />
      ) : (
        <FaCartShopping size={25} className="cursor-pointer" />
      )}
    </CustomButton>
  );
};

export default AddToCart;
