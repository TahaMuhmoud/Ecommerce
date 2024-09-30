import Product from "../Home/Product";
import { ProductInterface } from "../../types/types";
import { Dispatch, SetStateAction } from "react";
import CirclePagination from "../../components/CirclePagination";

interface ProductsSectionPagination {
  products: ProductInterface[];
  numOfPages: number;
  currPage: number;
  next: number;
  prev: number;
  changePage: Dispatch<SetStateAction<number>>;
}
const ProductsSectionPagination = ({
  products = [],
  numOfPages,
  currPage,
  next,
  prev,
  changePage,
}: ProductsSectionPagination) => {
  if (products.length <= 0) return null;
  return (
    <div className="grid gap-10">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold">You may also like</h3>
        <CirclePagination
          numOfPages={numOfPages}
          currPage={currPage}
          next={next}
          prev={prev}
          changePage={changePage}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {products.map((product, i) => (
          <Product key={i} product={product} index={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSectionPagination;
