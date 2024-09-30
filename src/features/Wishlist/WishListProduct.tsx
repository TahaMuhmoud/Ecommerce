import LazyImg from "../../components/LazyImg";
import { ProductInterface } from "../../types/types";
import { FaStar } from "react-icons/fa";
import CustomButton from "../../components/CustomButton";
import AddToCart from "../Product/AddToCart";
import { BiTrash } from "react-icons/bi";
import { BounceLoader } from "react-spinners";
import useRemoveFromWishList from "../../hooks/Wishlist/useRemoveFromWishList";

const WishListProduct = ({ product }: { product: ProductInterface }) => {
  const {
    imageCover,
    price,
    title,
    quantity,
    ratingsAverage,
    priceAfterDiscount,
    ratingsQuantity,
  } = product;

  const { removeFromWishList, isPending } = useRemoveFromWishList();

  const handleRemoveFromWishlist = () => {
    removeFromWishList(product._id);
  };
  return (
    <div className="w-full bg-secondary/10 p-2 flex flex-col md:flex-row items-center justify-between gap-y-3 gap-x-10">
      <div className="w-full flex gap-5">
        <div className="min-w-24 max-w-24">
          <LazyImg src={imageCover} />
        </div>
        <div className="w-full flex flex-col justify-evenly">
          <div className="">
            {quantity ? (
              <span className="text-green-600">
                In Stock{" "}
                <span className="text-xs text-secondary/50">({quantity})</span>
              </span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>
          <h3 className="text-xl md:text-3xl line-clamp-2">{title}</h3>
          <div className=" flex flex-wrap justify-between gap-3">
            <div className="flex items-center gap-5">
              <p className="flex items-center gap-2">
                {ratingsAverage} <FaStar />
              </p>
              <p>
                <span>{ratingsQuantity}</span> reviews
              </p>
            </div>
            <div className="flex flex-wrap items-end gap-2">
              {priceAfterDiscount && (
                <span className="line-through text-secondary/50">
                  {price} £
                </span>
              )}
              <span className="text-4xl font-black">
                {priceAfterDiscount ? priceAfterDiscount : price} £
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-fit flex md:flex-col gap-2">
        <CustomButton
          className="w-full md:w-fit py-2 md:p-5"
          onClick={handleRemoveFromWishlist}
        >
          {!isPending ? <BiTrash size={25} /> : <BounceLoader size={25} />}
        </CustomButton>
        <AddToCart product={product} className="w-full md:w-fit py-2 md:p-5" />
      </div>
    </div>
  );
};

export default WishListProduct;
