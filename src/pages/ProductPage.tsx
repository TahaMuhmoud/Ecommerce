import { useParams } from "react-router-dom";
import { ProductInterface } from "../types/types";
import LazyImg from "../components/LazyImg";
import { FaStar } from "react-icons/fa";
import IncDecQuantity from "../features/ProductPage/IncDecQuantity";
import ImgsSlider from "../features/ProductPage/ImgsSlider";

import { useProduct } from "../hooks/Product/useProduct";
import ProductsRecommended from "../features/ProductPage/ProductsRecommended";
import AddToFav from "../features/Product/AddToFav";
import AddToCart from "../features/Product/AddToCart";

const ProductPage = () => {
  const { productId } = useParams();

  const { product = {}, isLoadingProduct } = useProduct({
    id: productId!,
  });

  const {
    title,
    images,
    ratingsQuantity,
    priceAfterDiscount,
    price,
    category,
    subcategory,
    quantity,
    description,
    ratingsAverage,
    brand,
  } = product as ProductInterface;

  if (isLoadingProduct) return <div className="">Loading ...</div>;
  return (
    <div className="w-full flex flex-col gap-10">
      <div className=" bg-clr-two p-2 sm:p-5 py-5">
        <div className="grid lg:grid-cols-2 items-center justify-center gap-10">
          <div className="h-full flex-1 bg-ed-600 flex items-center">
            <ImgsSlider images={images} />
          </div>
          <div className="h-full flex-1 flex flex-col justify-center gap-3 lg:gap-5">
            <div className="grid gap-3">
              <span className="font-bold">{subcategory[0].name}</span>
              <h4 className="text-3xl sm:text-4xl md:text-5xl line-clamp-3">
                {title}
              </h4>
              <p>{description}</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="flex items-center gap-2">
                {ratingsAverage} <FaStar />
              </p>
              {ratingsQuantity && ratingsQuantity > 0 && (
                <p>
                  <span>{ratingsQuantity}</span> reviews
                </p>
              )}
            </div>
            <div className="flex flex-wrap items-end gap-2">
              {priceAfterDiscount && (
                <span className="line-through text-secondary/50">
                  {price} £
                </span>
              )}
              <span className="text-4xl font-black">
                {priceAfterDiscount ? priceAfterDiscount : price} £
              </span>
            </div>
            <div className="">
              Availability:{" "}
              <span>
                {quantity && quantity > 0 ? quantity : "OOPS Its finished"}
              </span>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <IncDecQuantity quantity={1} />
              <AddToFav product={product} className="p-2" />

              <AddToCart
                disabled={!quantity || quantity == 0}
                product={product}
                className="p-2"
              />
            </div>
            <LazyImg src={brand.image} alt="" className="max-w-20 rounded-xl" />
          </div>
        </div>
      </div>
      <ProductsRecommended brand={brand} category={category} />
    </div>
  );
};

export default ProductPage;
