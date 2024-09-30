import { Address } from "./addresses";
import { api } from "./api";

export type CheckoutReturn = {
  status: string;
  session: {
    url: string;
    success_url: string;
    cancel_url: string;
  };
};

export const checkout: (params: {
  cartID: string;
  shippingAddress: Address;
  token: string;
}) => Promise<CheckoutReturn> = async ({ token, cartID, shippingAddress }) => {
  const url = "http://localhost:5173";
  const { data } = await api
    .post(
      `/orders/checkout-session/${cartID}`,
      {
        shippingAddress,
      },
      {
        headers: { token },
        params: { url },
      }
    )
    .catch((err) => {
      throw new Error(err);
    });
  return data;
};
