import { useState } from "react";
import useProducts from "../../hooks/Products/useProducts";
import ProductsSectionPagination from "./ProductsSectionPagination";
import { BrandInterface, CategoryInterface } from "../../types/types";

const ProductsRecommended = ({
  brand,
  category,
}: {
  brand: BrandInterface;
  category: CategoryInterface;
}) => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useProducts({
    limit: 6,
    page: page,
    brand: brand?._id,
    category: category?._id,
  });

  if (isLoading) return <div>Loading ...</div>;
  return (
    <>
      {data && data.results > 0 && (
        <ProductsSectionPagination
          products={data?.data}
          numOfPages={data?.metadata.numberOfPages}
          currPage={data?.metadata.currentPage}
          next={data.metadata.nextPage}
          prev={data.metadata.prevPage}
          changePage={setPage}
        />
      )}
    </>
  );
};

export default ProductsRecommended;
