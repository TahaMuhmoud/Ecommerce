import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Address } from "../../services/addresses";
import { createOrder } from "../../services/orders";
import toast from "react-hot-toast";
import { usePaymentContext } from "../ContextHooks/usePaymentContext";

export const useCreateOrder = () => {
  const token = localStorage.getItem("token") || "";
  const { setShowPaymentPopup } = usePaymentContext();
  const qClient = useQueryClient();
  const query = useMutation({
    mutationKey: ["orders"],
    mutationFn: ({
      cartID,
      shippingAddress,
    }: {
      cartID: string;
      shippingAddress: Address;
    }) => createOrder({ token, cartID, shippingAddress }),
    onSuccess(data) {
      toast.success("Order" + data.status);
      setShowPaymentPopup(false);
      qClient.invalidateQueries();
    },
  });
  return query;
};
