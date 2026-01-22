import { IUser } from "./user";

export interface IGetRestaurantsParams {
  location?: string;
  range?: number;
  priceMin?: number;
  priceMax?: number;
  rating?: number;
  category?: string;
  page: number;
  limit?: number;
}

export interface IRestaurant {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  menuCount: number;
  priceRange: PriceRange;
  distance: number;
}

export interface IRecommendedRestaurant
  extends Omit<IRestaurant, "menuCount" | "priceRange"> {
  sampleMenus: Menu[];
  isFrequentlyOrdered: true;
  lat: number;
  long: number;
}

export interface IRestaurantDetails
  extends Omit<
    IRestaurant,
    "menuCount" | "reviewCount" | "priceRange" | "distance"
  > {
  averageRating: number;
  coordinates: Coordinates;
  totalMenus: number;
  totalReviews: number;
  menus: Menu[];
  reviews: RestaurantReview[];
}

type RestaurantReview = {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  user: Pick<IUser, "id" | "name" | "avatar">;
};

type Coordinates = {
  lat: number;
  long: number;
};

type PriceRange = {
  min: number;
  max: number;
};

export type Menu = {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
};
