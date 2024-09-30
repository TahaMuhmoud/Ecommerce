import { BounceLoader } from "react-spinners";
import { ProductInterface } from "../../types/types";
import { BiTrash } from "react-icons/bi";
import { useRemoveFromCart } from "../../hooks/Cart/useRemoveFromCart";

const RemoveFromCartButton = ({ product }: { product: ProductInterface }) => {
  const { mutate: removeProduct, isPending: isRemoving } = useRemoveFromCart();

  const handleRemoveProduct = () => {
    removeProduct(product._id);
  };
  return (
    <div
      className="w-full h-full color-main hover:bg-secondary/20 cursor-pointer grid place-items-center py-3"
      onClick={handleRemoveProduct}
    >
      {!isRemoving ? <BiTrash size={25} /> : <BounceLoader size={25} />}
    </div>
  );
};

export default RemoveFromCartButton;
