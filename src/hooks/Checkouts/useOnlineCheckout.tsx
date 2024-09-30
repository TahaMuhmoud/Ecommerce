import { useMutation } from "@tanstack/react-query";
import { checkout } from "../../services/checkout";
import { Address } from "../../services/addresses";

export const useOnlineCheckout = () => {
  const token = localStorage.getItem("token") || "";

  const query = useMutation({
    mutationFn: ({
      cartID,
      shippingAddress,
    }: {
      cartID: string;
      shippingAddress: Address;
    }) => checkout({ token, cartID, shippingAddress }),
    onSuccess(data) {
      console.log(data);

      window.location.href = data.session.url;
    },
  });
  return query;
};
