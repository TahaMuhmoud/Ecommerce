
import { ProductInterface } from "../../types/types";
import Product from "../Home/Product";
import { Dispatch, SetStateAction } from "react";
import Pagination from "../../components/Pagination";

const ProductsGrid = ({
  products = [],
  pagination,
}: {
  products: ProductInterface[];
  pagination?: {
    numPages?: number;
    currPage?: number;
    next?: number;
    prev?: number;
    changePage: Dispatch<SetStateAction<number>>;
  };
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 justify-center">
        {products.map((product, i) => (
          <Product
            key={i}
            product={product}
            index={i}
            className="min-w-56 max-w-56 xs:min-w-full xs:max-w-full"
          />
        ))}
      </div>
      {pagination && <Pagination pagination={pagination} />}
    </div>
  );
};

export default ProductsGrid;
