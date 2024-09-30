import { useQuery } from "@tanstack/react-query";
import { getWishList } from "../../services/wishlist";

export function useWishList() {
  const token = localStorage.getItem("token") || "";

  const query = useQuery({
    queryKey: ["wishList"],
    queryFn: () => getWishList(token),
  });
  return query;
}
