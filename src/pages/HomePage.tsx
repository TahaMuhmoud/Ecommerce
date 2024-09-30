import LandingSlider from "../features/Home/LandingSlider";
import ProductsSection from "../features/Home/ProductsSection";
import HomeSidebar from "../features/Home/HomeSidebar";
import DiscountBanner from "../features/Home/DiscountBanner";
import SecondNavbar from "../features/Home/SecondNavbar";
import useProducts from "../hooks/Products/useProducts";
import LoadingComponent from "../components/LoadingComponent";
import Brands from "../features/Home/Brands";

const HomePage = () => {
  const { data: newArrivals, isLoading: isLoadingNewArrivals } = useProducts({
    limit: 8,
    sort: "-createdAt",
  });
  const { data: topSellers, isLoading: isLoadingTopSellers } = useProducts({
    limit: 8,
    sort: "-sold",
  });
  if (isLoadingNewArrivals || isLoadingTopSellers)
    return <LoadingComponent size={50} />;
  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-full min-h-screen flex flex-col gap-10 overflow-hidden">
        <LandingSlider />

        <Brands />
        <SecondNavbar />
        <div className="flex gap-5">
          <div className="w-1/4 hidden lg:grid">
            <HomeSidebar />
          </div>
          <div className="h-full w-full p-5 flex flex-col gap-10">
            {topSellers?.data && topSellers.results > 0 && (
              <ProductsSection
                title="BEST SELLERS"
                products={topSellers.data}
              />
            )}

            <DiscountBanner
              discount={50}
              text="New Trending Fashion"
              backImg={"/b2.jpg"}
              navTo="/shop?category=6439d5b90049ad0b52b90048"
            />

            {newArrivals?.data && newArrivals?.results > 0 && (
              <ProductsSection
                title="NEW ARRIVALS"
                products={newArrivals.data}
              />
            )}

            <DiscountBanner
              discount={75}
              text="Women's fashion"
              backImg={"/b17.jpg"}
              navTo="/shop?category=6439d58a0049ad0b52b9003f"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
