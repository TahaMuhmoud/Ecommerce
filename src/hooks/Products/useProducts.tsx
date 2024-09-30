import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GetProductsParams } from "../../services/api";
import { getProducts } from "../../services/products";

const useProducts = (params?: Partial<GetProductsParams>) => {
  const { page = 1, limit = 40 } = params!;
  const qClient = useQueryClient();
  qClient.prefetchQuery({
    queryKey: [
      "products",
      page + 1,
      params?.sort,
      params?.category,
      params?.brand,
      params?.price,
      limit,
    ],
    queryFn: () => getProducts({ ...params, page: page + 1 }),
  });
  const { data, isLoading } = useQuery(
    {
      queryKey: [
        "products",
        page,
        params?.sort,
        params?.category,
        params?.brand,
        params?.price,
        limit,
      ],
      queryFn: () => getProducts(params),
    },
    qClient
  );
  return { data, isLoading };
};

export default useProducts;
