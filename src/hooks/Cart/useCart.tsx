import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/cart";

export const useCart = () => {
  const token = localStorage.getItem("token") || "";
  const query = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(token),
  });
  return query;
};
