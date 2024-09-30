import { useSearchParams } from "react-router-dom";
import FilterAndSortNavbar from "../features/AllProductsPage/FilterAndSortNavbar";
import ProductsGrid from "../features/AllProductsPage/ProductsGrid";
import FilteredData from "../features/AllProductsPage/FilteredData";
import { useState } from "react";
import useProducts from "../hooks/Products/useProducts";
import LoadingComponent from "../components/LoadingComponent";

const AllProducts = () => {
  const [URLSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useProducts({
    limit: 20,
    page: page,
    sort: URLSearchParams.get("sort") || undefined,
    category: URLSearchParams.get("category") || undefined,
    brand: URLSearchParams.get("brand") || undefined,
    price: {
      min: Number(URLSearchParams.get("min_price")) || undefined,
      max: Number(URLSearchParams.get("max_price")) || undefined,
    },
  });

  if (!data || isLoading) return <LoadingComponent size={50} />;
  return (
    <div className="w-full h-full grid gap-10">
      <div
        className={
          "w-full p-10 text-white text-8xl font-black text-center bg-[url('/b1.jpg')] bg-bottom"
        }
      >
        Shop
      </div>
      <div className="flex justify-center">
        <div className="container">
          <div className="w-full flex flex-col gap-5">
            <FilterAndSortNavbar />
            <FilteredData />
            {data.results > 0 ? (
              <>
                <ProductsGrid
                  products={data.data}
                  pagination={{
                    currPage: data.metadata.currentPage,
                    numPages: data.metadata.numberOfPages,
                    next: data.metadata.nextPage,
                    prev: data.metadata.prevPage,
                    changePage: setPage,
                  }}
                />
              </>
            ) : (
              <div className="text-vbig">No Products</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
