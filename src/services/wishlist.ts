import { ProductInterface } from "../types/types";
import { api } from "./api";

type GetWishListReturn = {
  status: string;
  count: number;
  data: ProductInterface[];
};

export const getWishList: (
  token: string
) => Promise<GetWishListReturn> = async (token) => {
  const { data } = await api
    .get("/wishlist", { headers: { token } })
    .catch((error) => error);
  return data;
};

// Add Product To Wishlist
type AddToWishListReturn = {
  status: string;
  message: string;
  data: string[];
};

export const addToWishList: (
  token: string,
  productId: string
) => Promise<AddToWishListReturn> = async (token, productId) => {
  const { data } = await api
    .post("/wishlist", { productId }, { headers: { token } })
    .catch((error) => error);

  return data;
};

// Remove From WishList
type RemoveFromWishListReturn = {
  status: string;
  message: string;
  data: string[];
};
export const removeFromWishList: (
  token: string,
  productId: string
) => Promise<RemoveFromWishListReturn> = async (token, productId) => {
  const { data } = await api
    .delete(`/wishlist/${productId}`, { headers: { token } })
    .catch((error) => error);
  return data;
};
