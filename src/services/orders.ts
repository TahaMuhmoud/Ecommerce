import { Address } from "./addresses";
import { api } from "./api";
import { CartItem } from "./cart";

export type Order = {
  _id: string;
  id: number;
  cartItems: CartItem[];
  user: {
    _id: string;
    name: string;
    email: string;
    phone: string;
  };
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
  };
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  createdAt: string;
  updatedAt: string;
};
export const getOrders: (userId: string) => Promise<Order[]> = async (
  userId
) => {
  console.log(userId);

  const { data } = await api.get(`/orders/user/${userId}`).catch((err) => {
    throw new Error(err);
  });
  return data;
};
// POST: Create Order
type CreateOrderReturn = {
  status: string;
  data: Order;
};
export const createOrder: (params: {
  cartID: string;
  shippingAddress: Address;
  token: string;
}) => Promise<CreateOrderReturn> = async ({
  cartID,
  token,
  shippingAddress,
}) => {
  const { data } = await api
    .post(
      `/orders/${cartID}`,
      {
        shippingAddress,
      },
      {
        headers: {
          token,
        },
      }
    )
    .catch((err) => {
      throw new Error(err);
    });
  return data;
};
