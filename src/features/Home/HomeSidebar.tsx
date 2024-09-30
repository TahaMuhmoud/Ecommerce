import Product from "./Product";
import SidebarProduct from "./SidebarProduct";
import SidebarProductsSection from "./SidebarProductsSection";
import SidebarCategories from "./SidebarCategories";
import SidebarBrands from "./SidebarBrands";
import useProducts from "../../hooks/Products/useProducts";

const HomeSidebar = () => {
  const { data: newArrivals } = useProducts({
    limit: 2,
    sort: "-createdAt",
  });
  const { data: topRated } = useProducts({
    limit: 2,
    sort: "-ratingsAverage",
  });
  return (
    <div className="w-full h-fit flex flex-col gap-5">
      <SidebarCategories />
      <SidebarBrands />
      <SidebarProductsSection title="New Arrivals">
        {newArrivals?.data.map((product, i) => (
          <SidebarProduct key={i} product={product} />
        ))}
      </SidebarProductsSection>
      <SidebarProductsSection title="Top Rated Product">
        {topRated?.data.map((product, i) => (
          <Product key={i} product={product} index={0} />
        ))}
      </SidebarProductsSection>
    </div>
  );
};

export default HomeSidebar;
