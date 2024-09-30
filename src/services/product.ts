import { ProductInterface } from "../types/types";
import { api } from "./api";

export const getProduct: (id: string) => Promise<ProductInterface> = async (
  id
) => {
  const { data, status, statusText } = await api.get(`/products/${id}`);
  if (status !== 200) {
    throw new Error(statusText);
  }
  return data.data;
};
