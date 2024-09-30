import { Dispatch, SetStateAction } from "react";
import PriceSlider from "../../components/PriceSlider";
import { MAX_PRICE, MIN_PRICE } from "../../utils/constants";
import FiltersSidebarSection from "./FiltersSidebarSection";
import { FieldValues, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useCategories } from "../../hooks/Categories/useCategories";
import { useBrands } from "../../hooks/Brands/useBrands";
import CustomButton from "../../components/CustomButton";

const FiltersMenu = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const { data: categories } = useCategories({ limit: 40 });
  const { data: brands } = useBrands({ limit: 40 });
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ category, brand, maxPrice, minPrice }: FieldValues) => {
    URLSearchParams.forEach((_, key) => {
      URLSearchParams.delete(key);
    });
    if (category !== null) URLSearchParams.set("category", category);
    if (brand !== null) URLSearchParams.set("brand", brand);
    if (minPrice !== null && Number(minPrice) != MIN_PRICE)
      URLSearchParams.set("min_price", minPrice);
    if (maxPrice !== null && Number(maxPrice) !== MAX_PRICE)
      URLSearchParams.set("max_price", maxPrice);
    SetURLSearchParams(URLSearchParams);
    setOpen(false);
  };
  return (
    <div
      className={`overflow-hidden w-full  bg-clr-two absolute top-full z-[100] flex flex-col gap-5 p-5`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <FiltersSidebarSection className="col-span-1" title="Categories">
            {categories?.data.map((cat, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="radio"
                  id={`cat-${i}`}
                  title="category"
                  value={cat._id}
                  {...register("category")}
                />
                <label htmlFor={`cat-${i}`}>{cat.name}</label>
              </div>
            ))}
          </FiltersSidebarSection>
          <FiltersSidebarSection title="Brands" className="col-span-1">
            {brands?.data.map((brand, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="radio"
                  id={`brand-${i}`}
                  title="brand"
                  value={brand._id}
                  {...register("brand")}
                />
                <label htmlFor={`brand-${i}`}>{brand.name}</label>
              </div>
            ))}
          </FiltersSidebarSection>{" "}
          <FiltersSidebarSection
            className="col-span-full md:col-span-1"
            title="Price"
          >
            <PriceSlider min={MIN_PRICE} max={MAX_PRICE} register={register} />
          </FiltersSidebarSection>
        </div>
        <div className="flex justify-end">
          <CustomButton type="submit" className="px-4 py-2">
            Save
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default FiltersMenu;
