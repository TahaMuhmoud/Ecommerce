import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCart } from "../../services/cart";

export default function useClearCart() {
  const token = localStorage.getItem("token") || "";
  const qClient = useQueryClient();
  const query = useMutation({
    mutationKey: ["cart"],
    mutationFn: () => clearCart(token),
    onSuccess() {
      qClient.invalidateQueries();
    },
  });
  return query;
}
