import { ProductInterface } from "../types/types";
import { api, GetAllReturnType, GetProductsParams } from "./api";

export const getProducts: (
  params?: Partial<GetProductsParams>
) => Promise<GetAllReturnType<ProductInterface>> = async ({
  limit = 20,
  page = 1,
  brand,
  category,
  fields,
  keyword,
  price,
  sort,
  subcategory,
} = {}) => {
  const fs = fields || [
    "title",
    "price",
    "ratingsAverage",
    "priceAfterDiscount",
    "images",
    "imageCover",
  ];

  const { data } = await api
    .get("/products", {
      params: {
        limit: limit,
        page: page,
        brand: brand,
        category: category,
        fields: fs?.join(),
        keyword: keyword,
        "price[gte]": price?.min,
        "price[lte]": price?.max,
        sort: sort,
        subcategory: subcategory,
      },
    })
    .catch((rej) => {
      throw new Error(rej as string);
    });
  return data;
};
