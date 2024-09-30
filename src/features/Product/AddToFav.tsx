import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ProductInterface } from "../../types/types";
import CustomButton from "../../components/CustomButton";
import { cn } from "../../utils/helpers";
import { useWishList } from "../../hooks/Wishlist/useWishList";
import { useAddToWishList } from "../../hooks/Wishlist/useAddToWishList";
import useRemoveFromWishList from "../../hooks/Wishlist/useRemoveFromWishList";
import { BounceLoader } from "react-spinners";

const AddToFav = ({
  product,
  className,
}: {
  product: ProductInterface;
  className?: string;
}) => {
  const { data } = useWishList();

  const isInWishlist =
    data?.data.findIndex((wlp) => wlp._id === product._id) !== -1;

  const { addToWishList, isPending: isAdding } = useAddToWishList();
  const { removeFromWishList, isPending: isRemoving } = useRemoveFromWishList();

  const handleOnClick = () => {
    if (isInWishlist) {
      removeFromWishList(product._id);
    } else {
      addToWishList(product._id);
    }
  };
  return (
    <CustomButton className={cn(className)} onClick={handleOnClick}>
      {isAdding || isRemoving ? (
        <BounceLoader size={25} className="" />
      ) : (
        <>
          {isInWishlist ? (
            <FaHeart size={25} className="cursor-pointer fill-red-600" />
          ) : (
            <FaRegHeart size={25} className="cursor-pointer text-xl" />
          )}
        </>
      )}
    </CustomButton>
  );
};

export default AddToFav;
