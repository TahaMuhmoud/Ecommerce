import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishList as removeFromWishListFn } from "../../services/wishlist";

export default function useRemoveFromWishList() {
  const token = localStorage.getItem("token") || "";
  const qClient = useQueryClient();
  const {
    mutate: removeFromWishList,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["wishList"],
    mutationFn: (productId: string) => removeFromWishListFn(token, productId),
    onSuccess() {
      qClient.invalidateQueries();
    },
  });
  return { removeFromWishList, isPending, isError, error };
}
