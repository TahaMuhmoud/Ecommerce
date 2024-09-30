import { MutableRefObject, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { ProductInterface } from "../../types/types";
import Product from "./Product";

interface ProductsSection {
  title: string;
  products: ProductInterface[];
}
const ProductsSection = ({ title, products = [] }: ProductsSection) => {
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const { events } = useDraggable(ref, {
    safeDisplacement: 1,
  });
  if (products.length <= 0) return null;
  return (
    <div className="flex flex-col gap-5">
      <div className="">
        <h3 className="w-fit px-4 py-1 color-main text-3xl font-bold rounded-t-xl">
          {title}
        </h3>
        <hr className="h-px bg-secondary" />
      </div>
      <div
        className="flex flex-nowrap md:grid md:grid-cols-4 xl:grid-cols-5 gap-3 overflow-x-scroll flex-grow"
        {...events}
        ref={ref}
      >
        {products.map((product, i) => (
          <Product
            key={i}
            product={product}
            index={i}
            className="min-w-56 max-w-56 md:min-w-full md:max-w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
