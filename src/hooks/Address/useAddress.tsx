import { useQuery } from "@tanstack/react-query";
import { getAddress } from "../../services/addresses";

export const useAddress = (addressID: string) => {
  const token = localStorage.getItem("token") || "";
  const query = useQuery({
    queryKey: ["addr", addressID],
    queryFn: () => getAddress(token, addressID),
  });
  return query;
};
