import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addToCart as addToCartFn } from "../../services/cart";

export function useAddToCart() {
  const token = localStorage.getItem("token") || "";
  const qClient = useQueryClient();
  const { mutate: addToCart, isPending } = useMutation({
    mutationKey: ["cart"],
    mutationFn: (productId: string) => addToCartFn(token, productId),
    onSuccess() {
      qClient.invalidateQueries();
    },
  });
  return { addToCart, isPending };
}
