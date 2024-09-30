import LoadingComponent from "../components/LoadingComponent";
import WishListProduct from "../features/Wishlist/WishListProduct";
import { useWishList } from "../hooks/Wishlist/useWishList";

const WishlistPage = () => {
  const { data: wishlistData, isLoading } = useWishList();

  if (!wishlistData && isLoading) return <LoadingComponent size={50} />;
  return (
    <div className="w-screen min-h-screen flex flex-col items-center">
      <div className="w-full md:container flex flex-col gap-5">
        {wishlistData?.data.map((product) => (
          <WishListProduct product={product} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
