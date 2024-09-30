import { CategoryInterface } from "../types/types";
import { api, GetAllReturnType } from "./api";
export interface GetCategoriesInterface {
  limit?: number;
  page?: number;
}
export const getCategories: (
  params: GetCategoriesInterface
) => Promise<GetAllReturnType<CategoryInterface>> = async ({
  page = 1,
  limit,
}) => {
  const { data } = await api.get("/categories", {
    params: {
      limit,
      page,
    },
  });
  return data;
};
