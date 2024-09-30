import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../../services/cart";

export function useRemoveFromCart() {
  const token = localStorage.getItem("token") || "";
  const qClient = useQueryClient();
  const query = useMutation({
    mutationKey: ["cart"],
    mutationFn: (productId: string) => removeFromCart(token, productId),
    onSuccess() {
      qClient.invalidateQueries();
    },
  });
  return query;
}
