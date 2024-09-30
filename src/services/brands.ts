import { BrandInterface } from "../types/types";
import { api, GetAllReturnType } from "./api";
export interface GetBrandsInterface {
  limit?: number;
  page?: number;
}
export const getBrands: (
  params: GetBrandsInterface
) => Promise<GetAllReturnType<BrandInterface>> = async ({
  page = 1,
  limit,
}) => {
  const { data } = await api.get("/brands", {
    params: {
      limit,
      page,
    },
  });
  return data;
};
