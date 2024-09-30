import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBrands, GetBrandsInterface } from "../../services/brands";

export function useBrands(params: GetBrandsInterface) {
  const { page = 1, limit = 40 } = params!;
  const qClient = useQueryClient();
  qClient.prefetchQuery({
    queryKey: ["brands", page + 1, limit],
    queryFn: () => getBrands({ ...params, page: page + 1 }),
  });
  const query = useQuery({
    queryKey: ["brands", page, limit],
    queryFn: () => getBrands(params),
  });
  return query;
}
