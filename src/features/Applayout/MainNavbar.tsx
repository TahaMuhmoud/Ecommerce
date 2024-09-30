import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import LazyImg from "../../components/LazyImg";
import { useLocation, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BounceLoader } from "react-spinners";
import { useState } from "react";
import MainMenu from "../MainNavbar/MainMenu";
import { useWishList } from "../../hooks/Wishlist/useWishList";
import { useCart } from "../../hooks/Cart/useCart";
import useUser from "../../hooks/Auth/useUser";

const MainNavbar = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const { data: cartData } = useCart();
  const { data: wishlistData } = useWishList();
  const { data: user, isLoading: isLoadingUser } = useUser();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  // const [searchText, setSearchText] = useState<string>("");
  // const { data, isLoading } = useProducts({ limit: 3, keyword: searchText });
  const handleSearch = () => {
    // setSearchText(e.target.value);
  };
  return (
    <div className="w-full color-main relative">
      <LazyImg
        src="/b14.png"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div className="flex flex-col relative z-10">
        <div className="flex items-center justify-between px-5 pt-3 pb-2 md:pb-0 relative">
          <div className="logo">
            <LazyImg
              src="/logo.webp"
              className="w-9 sm:w-12 cursor-pointer"
              onClick={() => nav("/")}
            />
          </div>
          <div className="flex items-center gap-4">
            <div
              className="relative cursor-pointer"
              onClick={() => nav("/wishlist")}
            >
              <div className="absolute top-0 -translate-y-1/2 left-0 -translate-x-1/2 bg-red-500 text-white w-fit p-1 aspect-square rounded-full grid place-items-center text-xs md:text-sm">
                {wishlistData && wishlistData?.count !== undefined && (
                  <div className="absolute top-0 -translate-y-1/2 left-0 -translate-x-1/2 bg-red-500 text-white w-5 aspect-square rounded-full grid place-items-center text-xs md:text-sm">
                    {wishlistData?.count < 99 ? wishlistData?.count : "+" + 99}
                  </div>
                )}
              </div>
              <MdFavoriteBorder className="text-2xl md:text-3xl" />
            </div>
            <div
              className="relative cursor-pointer"
              onClick={() => nav("/cart")}
            >
              {cartData && cartData?.numOfCartItems !== undefined && (
                <div className="absolute top-0 -translate-y-1/2 left-0 -translate-x-1/2 bg-red-500 text-white w-5 aspect-square rounded-full grid place-items-center text-xs md:text-sm">
                  {cartData?.numOfCartItems < 99
                    ? cartData?.numOfCartItems
                    : "+" + 99}
                </div>
              )}
              <IoMdCart className="text-2xl md:text-3xl" />
            </div>
            <div className="relative">
              <div
                className="w-9 md:w-10 aspect-square rounded-full bg-primary overflow-hidden grid place-items-center"
                onClick={() => setShowMenu((is) => !is)}
              >
                {isLoadingUser ? (
                  <BounceLoader size={25} />
                ) : (
                  <LazyImg
                    src="/avatar.jpg"
                    className="w-full h-full object-scale-down cursor-pointer"
                  />
                )}
              </div>
              {showMenu && user?.decoded.name && (
                <MainMenu user={user!} setIsOpen={setShowMenu} />
              )}
            </div>
          </div>
        </div>
        <div className="flex items-stretch justify-evenly gap-5 px-5 lg:px-10">
          <div className="hidden md:flex items-stretch gap-4 text- font-bold">
            <div
              className={`hover:bg-primary hover:text-secondary grid place-items-center px-5 cursor-pointer ${
                !pathname.charCodeAt(1)
                  ? "bg-primary text-secondary"
                  : "color-main"
              }`}
              onClick={() => nav("/")}
            >
              Home
            </div>
            <div
              className={`color-main hover:bg-primary hover:text-secondary grid place-items-center px-5 cursor-pointer ${
                pathname.includes("shop")
                  ? "bg-primary text-secondary"
                  : "color-main"
              }`}
              onClick={() => nav("/shop")}
            >
              Shop
            </div>
          </div>
          <div className="w-full lg:w-[600px] m-1 p-1 text-secondary relative border-2 border-white flex">
            <input
              type="text"
              title="search-inp"
              className="w-full p-1 bg-[#eee] text-lg outline-none text-black"
              onChange={handleSearch}
            />
            <button title="search" className="px-5 color-main">
              <BiSearch className="text-2xl md:text-3xl" />
            </button>
            {/* {data && data.data.length > 0 && (
              <div className="w-full lg:w-[600px] absolute top-full bg-clr-two p-3 flex flex-col gap-2">
                {data?.data.map((product, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 bg-secondary/10 hover:bg-secondary/20 p-2 cursor-pointer"
                  >
                    <div className="w-14 aspect-[1/1.2] bg-white">
                      <LazyImg
                        src={product.imageCover}
                        className="w-full h-full object-scale-down"
                      />
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="">
                        <h5 className="text-xl font-bold">{product.title}</h5>
                        <div className="flex flex-wrap items-end gap-2">
                          {product.priceAfterDiscount && (
                            <span className="line-through text-secondary/50">
                              {product.price} LE
                            </span>
                          )}
                          <span className="p-1 rounded-md bg-clr-main text-white">
                            {product.priceAfterDiscount
                              ? product.priceAfterDiscount
                              : product.price}{" "}
                            £
                          </span>
                        </div>
                      </div>
                      <div className="w-12 aspect-square rounded-full text-xs md:text-sm grid place-items-center bg-secondary/40 text-white">
                        <div className="flex items-center gap-1">
                          <BsStarFill className="text-yellow-400" />
                          <span>{product.ratingsAverage}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
