import { ImgHTMLAttributes } from "react";

const LazyImg = (props: ImgHTMLAttributes<HTMLImageElement>) => {
  return <img {...props} loading="lazy" alt="" />;
};

export default LazyImg;
