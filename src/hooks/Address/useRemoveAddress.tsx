import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeAddress } from "../../services/addresses";

export const useRemoveAddress = () => {
  const token = localStorage.getItem("token") || "";
  const qClient = useQueryClient();
  const query = useMutation({
    mutationKey: ["user-addresses"],
    mutationFn: (addressID: string) => removeAddress(token, addressID),
    onSuccess() {
      qClient.invalidateQueries();
    },
  });
  return query;
};
