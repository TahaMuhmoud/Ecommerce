import { ProductInterface } from "../types/types";
import { api } from "./api";

// Get Cart Data
export type CartItem = {
  count: number;
  _id: string;
  price: number;
  product: ProductInterface;
};
export type CartReturn = {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: string;
  data: {
    _id: string;
    cartOwner: string;
    products: CartItem[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    totalCartPrice: number;
  };
};
export const getCart: (token: string) => Promise<CartReturn> = async (
  token
) => {
  const { data } = await api
    .get("/cart", { headers: { token } })
    .catch((error) => error);
  return data;
};
// PUT: Update cart product quantity
export const updateQuantity: (
  token: string,
  productId: string,
  count: string
) => Promise<CartReturn> = async (token, productId, count) => {
  const { data } = await api
    .put(`/cart/${productId}`, { count }, { headers: { token } })
    .catch((error) => error);
  return data;
};
// POST: Add Product To Cart
export const addToCart: (
  token: string,
  productId: string
) => Promise<CartReturn> = async (token, productId) => {
  const { data } = await api
    .post(`/cart`, { productId }, { headers: { token } })
    .catch((error) => error);
  return data;
};
// DELETE: Remove Product From Cart
export const removeFromCart: (
  token: string,
  productId: string
) => Promise<CartReturn> = async (token, productId) => {
  const { data } = await api
    .delete(`/cart/${productId}`, { headers: { token } })
    .catch((error) => error);
  return data;
};
// DELETE: Clear All Products From Cart
export const clearCart: (token: string) => Promise<CartReturn> = async (
  token
) => {
  const { data } = await api
    .delete(`/cart`, { headers: { token } })
    .catch((error) => error);
  return data;
};
