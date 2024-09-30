import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/orders";

export const useOrders = (userID: string) => {
  const query = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(userID),
  });
  return query;
};
