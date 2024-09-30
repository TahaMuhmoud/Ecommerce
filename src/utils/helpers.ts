import clsx, { ClassValue } from "clsx";

export const findDiscountPircent: (
  price: number,
  priceAfterDiscount: number
) => number = (price, priceAfterDiscount) => {
  const discount = price - priceAfterDiscount;
  const discountPercent = (discount / price) * 100;
  return Math.round(discountPercent);
};
export const prepareURL: (str: string) => string = (str) => {
  return str.split("/").join("_").split(" ").join("_");
};

export const cn = (...classes: ClassValue[]) => clsx(classes);
