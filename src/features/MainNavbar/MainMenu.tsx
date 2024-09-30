import { BsCart2, BsCartCheck } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import LazyImg from "../../components/LazyImg";
import { Dispatch, SetStateAction } from "react";
import { RiLoginCircleLine } from "react-icons/ri";
import { useQueryClient } from "@tanstack/react-query";
import { useLogout } from "../../hooks/Auth/useLogout";

const MainMenu = ({
  user,
  setIsOpen,
}: {
  user: { decoded: { name: string } };
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const logout = useLogout();
  const qClient = useQueryClient();
  return (
    <div className="w-[200px] bg-primary absolute top-full right-0 mt-3 p-2 text-secondary z-[100000]">
      <div className="flex gap-3 items-center pb-3">
        <div className="w-10 aspect-square rounded-full bg-primary overflow-hidden grid place-items-center">
          <LazyImg
            src="/avatar.jpg"
            className="w-full h-full object-scale-down cursor-pointer"
          />
        </div>
        <div className="text-lg">{user?.decoded.name}</div>
      </div>
      <ul className="flex flex-col gap-1">
        <Link to={"/allorders"} onClick={() => setIsOpen(false)}>
          <li className="color-main hover:bg-secondary/20 px-5 py-2 rounded-xl flex gap-2">
            <BsCartCheck size={25} /> My Orders
          </li>
        </Link>
        <Link to={"/cart"} onClick={() => setIsOpen(false)}>
          <li className="color-main hover:bg-secondary/20 px-5 py-2 rounded-xl flex gap-2">
            <BsCart2 size={25} /> My Cart
          </li>
        </Link>
        <Link to={"/wishlist"} onClick={() => setIsOpen(false)}>
          <li className="color-main hover:bg-secondary/20 px-5 py-2 rounded-xl flex gap-2">
            <MdFavoriteBorder size={25} /> My Wishlist
          </li>
        </Link>
        <Link
          to={"/login"}
          onClick={() => {
            logout();
            qClient.clear();
          }}
        >
          <li className="color-main hover:bg-secondary/20 px-5 py-2 rounded-xl flex gap-2">
            <RiLoginCircleLine size={25} /> LOGOUT
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default MainMenu;
