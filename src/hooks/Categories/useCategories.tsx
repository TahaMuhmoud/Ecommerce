import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCategories,
  GetCategoriesInterface,
} from "../../services/categories";

export function useCategories(params: GetCategoriesInterface) {
  const { page = 1, limit = 40 } = params!;
  const qClient = useQueryClient();
  qClient.prefetchQuery({
    queryKey: ["categories", page + 1, limit],
    queryFn: () => getCategories({ ...params, page: page + 1 }),
  });
  const query = useQuery({
    queryKey: ["categories", page, limit],
    queryFn: () => getCategories(params),
  });
  return query;
}
