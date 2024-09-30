import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useCategories } from "../../hooks/Categories/useCategories";
import { useBrands } from "../../hooks/Brands/useBrands";

const SecondNavbar = () => {
  const nav = useNavigate();
  const [isShowCategories, setIsShowCategories] = useState<boolean>(false);
  const [isShowBrands, setIsShowBrands] = useState<boolean>(false);
  const { data: categories } = useCategories({});
  const { data: brands } = useBrands({});
  return (
    <div className="w-full flex items-center justify-center bg-secondary/10 relative text-lg font-bold">
      <div
        className={`cursor-pointer hover:color-main p-3 flex gap-3 items-center ${
          isShowCategories ? "color-main" : ""
        }`}
        onClick={() => {
          setIsShowBrands(false);
          setIsShowCategories((is) => !is);
        }}
      >
        Categories
        <IoIosArrowDown />
      </div>
      <div
        className={`cursor-pointer hover:color-main p-3 flex gap-3 items-center ${
          isShowBrands ? "color-main" : ""
        }`}
        onClick={() => {
          setIsShowCategories(false);
          setIsShowBrands((is) => !is);
        }}
      >
        Brands
        <IoIosArrowDown />
      </div>
      {isShowCategories && (
        <div className="w-full sm:w-1/2 p-3 bg-clr-two flex flex-wrap gap-2 absolute top-full left-0 z-[100]">
          {categories?.data.map((cat, i) => (
            <div
              key={i}
              className="p-2 bg-primary hover:color-main cursor-pointer"
              onClick={() => nav(`/shop?category=${cat._id}`)}
            >
              {cat.name}
            </div>
          ))}
        </div>
      )}
      {isShowBrands && (
        <div className="w-full sm:w-1/2 p-3 bg-clr-two flex flex-wrap gap-2 absolute top-full left-0 z-[100]">
          {brands?.data.map((brand, i) => (
            <div
              key={i}
              className="p-2 bg-primary hover:color-main cursor-pointer"
              onClick={() => nav(`/shop?brand=${brand._id}`)}
            >
              {brand.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SecondNavbar;
