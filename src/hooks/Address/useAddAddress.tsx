import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAddress, Address } from "../../services/addresses";
import toast from "react-hot-toast";

export const useAddAddress = () => {
  const token = localStorage.getItem("token") || "";
  const qClient = useQueryClient();
  const query = useMutation({
    mutationKey: ["user-addresses"],
    mutationFn: (address: Address) => addAddress(token, address),
    onSuccess(data) {
      console.log(data.message);

      toast.success(data.message);
      qClient.invalidateQueries();
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  return query;
};
