import { useQuery } from "@tanstack/react-query";
import { getUserAddresses } from "../../services/addresses";

export const useAllUserAddresses = () => {
  const token = localStorage.getItem("token") || "";
  const query = useQuery({
    queryKey: ["user-addresses"],
    queryFn: () => getUserAddresses(token),
  });
  return query;
};
