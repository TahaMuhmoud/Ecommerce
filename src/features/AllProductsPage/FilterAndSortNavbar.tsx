import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";
import { useState } from "react";
import FiltersMenu from "./FiltersMenu";
import SortMenu from "./SortMenu";

const FilterAndSortNavbar = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false);
  const handlFiltersShow = () => {
    if (isSortOpen) setIsSortOpen(false);
    setIsFiltersOpen((is) => !is);
  };
  const handlSortShow = () => {
    if (isFiltersOpen) setIsFiltersOpen(false);
    setIsSortOpen((is) => !is);
  };
  return (
    <div>
      <div className="w-full border-b border-secondary/50 flex gap-5 relative">
        <div
          className="flex gap-3 items-center bg-secondary/10 px-5 py-3 cursor-pointer"
          onClick={handlFiltersShow}
        >
          <FiFilter />
          <span>Filter</span>
          {isFiltersOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        <div
          className="flex gap-3 items-center bg-secondary/10 px-5 py-3 cursor-pointer"
          onClick={handlSortShow}
        >
          <MdOutlineSort />
          <span>Sort</span>
          {isSortOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
        {isFiltersOpen && <FiltersMenu setOpen={setIsFiltersOpen} />}
        {isSortOpen && <SortMenu />}
      </div>
    </div>
  );
};

export default FilterAndSortNavbar;
