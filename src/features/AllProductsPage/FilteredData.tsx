import { CgClose } from "react-icons/cg";
import { useSearchParams } from "react-router-dom";
import { useCategories } from "../../hooks/Categories/useCategories";
import { useBrands } from "../../hooks/Brands/useBrands";

const FilteredData = () => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const { data: categories } = useCategories({ limit: 40 });
  const { data: brands } = useBrands({ limit: 40 });
  const choosedCategory = categories?.data.filter(
    (el) => el._id == URLSearchParams.get("category")
  )[0]?.name;
  const choosedBrand = brands?.data.filter(
    (el) => el._id == URLSearchParams.get("brand")
  )[0]?.name;
  return (
    <>
      {URLSearchParams.size > 0 && (
        <div className="flex flex-wrap items-center gap-3">
          <h6>Filters : </h6>
          <div className="flex flex-wrap items-center gap-3">
            {choosedCategory && (
              <div className="px-3 py-2 rounded-full bg-secondary/10 flex items-center gap-2">
                <span>{choosedCategory}</span>
                <CgClose
                  className="cursor-pointer hover:text-clr-main"
                  onClick={() => {
                    URLSearchParams.delete("category");
                    SetURLSearchParams(URLSearchParams);
                  }}
                />
              </div>
            )}
            {choosedBrand && (
              <div className="px-3 py-2 rounded-full bg-secondary/10 flex items-center gap-2">
                <span>{choosedBrand}</span>
                <CgClose
                  className="cursor-pointer hover:text-clr-main"
                  onClick={() => {
                    URLSearchParams.delete("brand");
                    SetURLSearchParams(URLSearchParams);
                  }}
                />
              </div>
            )}
            {URLSearchParams.get("min_price") && (
              <div className="px-3 py-2 rounded-full bg-secondary/10 flex items-center gap-2">
                <span>{URLSearchParams.get("min_price")}</span>
                <CgClose
                  className="cursor-pointer hover:text-clr-main"
                  onClick={() => {
                    URLSearchParams.delete("min_price");
                    SetURLSearchParams(URLSearchParams);
                  }}
                />
              </div>
            )}
            {URLSearchParams.get("max_price") && (
              <div className="px-3 py-2 rounded-full bg-secondary/10 flex items-center gap-2">
                <span>{URLSearchParams.get("max_price")}</span>
                <CgClose
                  className="cursor-pointer hover:text-clr-main"
                  onClick={() => {
                    URLSearchParams.delete("max_price");
                    SetURLSearchParams(URLSearchParams);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FilteredData;
