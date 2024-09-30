import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useBrands } from "../../hooks/Brands/useBrands";
import { useNavigate } from "react-router-dom";

const Brands = () => {
  const nav = useNavigate();
  const { data: brands } = useBrands({});

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.to(".brands", {
      xPercent: -100,
      duration: 10,
      repeat: Infinity,
      ease: "none",
    });
  });

  return (
    <div className="w-full">
      <div className="brands flex gap-4">
        {brands && brands?.data.length > 0 && (
          <>
            {brands?.data.map((brand, i) => (
              <div
                key={i}
                className="min-w-24 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => nav(`/shop/brand=${brand._id}`)}
              >
                <img src={brand.image} alt="" className="" />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Brands;
