import axios from "axios";

export const api = axios.create({
  baseURL: "https://ecommerce.routemisr.com/api/v1/",
});

export interface GetProductsParams {
  limit: number;
  price: { min?: number; max?: number };
  keyword: string;
  sort: string;
  fields: string[];
  page: number;
  category: string;
  subcategory: string;
  brand: string;
}
export interface GetAllReturnType<T> {
  data: T[];
  results: number;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage: number;
    prevPage: number;
  };
}
