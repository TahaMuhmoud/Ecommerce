import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishList as addToWishListFn } from "../../services/wishlist";

export function useAddToWishList() {
  const token = localStorage.getItem("token") || "";
  const qClient = useQueryClient();
  const {
    mutate: addToWishList,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationKey: ["wishList"],
    mutationFn: (productId: string) => addToWishListFn(token, productId),
    onSuccess() {
      qClient.invalidateQueries();
    },
  });
  return { addToWishList, isPending, isError, error };
}
