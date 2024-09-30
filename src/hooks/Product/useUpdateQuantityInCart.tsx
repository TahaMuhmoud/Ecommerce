import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuantity } from "../../services/cart";

export function useUpdateQuantityInCart() {
  const token = localStorage.getItem("token") || "";
  const qClient = useQueryClient();
  const query = useMutation({
    mutationKey: ["cart"],
    mutationFn: ({ productId, count }: { productId: string; count: number }) =>
      updateQuantity(token, productId, count.toString()),
    onSuccess() {
      qClient.invalidateQueries();
    },
  });
  return query;
}
