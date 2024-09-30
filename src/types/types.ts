export enum ColorMode {
  DARK = "dark",
  LIGHT = "light",
}
export interface CategoryInterface {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
export interface BrandInterface {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface ProductInterface {
  sold: number;
  images: string[];
  subcategory: {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  id: string;
  priceAfterDiscount?: number;
  price: number;
  imageCover: string;
  category: CategoryInterface;
  brand: BrandInterface;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
}
