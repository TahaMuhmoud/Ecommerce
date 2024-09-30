import { useState } from "react";
import SidebarSection from "./SidebarSection";
import { useCategories } from "../../hooks/Categories/useCategories";

const SidebarCategories = () => {
  const [categoriesPage, setCategoriesPage] = useState<number>(1);
  const { data: categories } = useCategories({
    limit: 5,
    page: categoriesPage,
  });
  return (
    <>
      {categories && categories.data.length > 0 && (
        <SidebarSection
          title="Categories"
          list={categories.data}
          navTo="category"
          pagination={{
            numOfPages: categories.metadata.numberOfPages,
            currPage: categories.metadata.currentPage,
            next: categories.metadata.nextPage,
            prev: categories.metadata.prevPage,
            changePage: setCategoriesPage,
          }}
        />
      )}
    </>
  );
};

export default SidebarCategories;
