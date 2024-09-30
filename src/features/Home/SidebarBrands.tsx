import { useState } from "react";
import SidebarSection from "./SidebarSection";
import { useBrands } from "../../hooks/Brands/useBrands";

const SidebarBrands = () => {
  const [brandsPage, setBrandsPage] = useState<number>(1);
  const { data: brands } = useBrands({ limit: 5, page: brandsPage });
  return (
    <>
      {brands && brands.data.length > 0 && (
        <SidebarSection
          title="Brands"
          list={brands?.data}
          navTo="brand"
          pagination={{
            numOfPages: brands.metadata.numberOfPages,
            currPage: brands.metadata.currentPage,
            next: brands.metadata.nextPage,
            prev: brands.metadata.prevPage,
            changePage: setBrandsPage,
          }}
        />
      )}
    </>
  );
};

export default SidebarBrands;
