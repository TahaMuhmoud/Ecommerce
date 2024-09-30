import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { getProduct } from "../../services/product";

export const useProduct = ({ id }: { id: string }) => {
  const { state } = useLocation();

  const { data: product, isLoading: isLoadingProduct } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
    initialData: state,
  });
  return { product, isLoadingProduct };
};
