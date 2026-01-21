import { Item } from "./order";
import { IRestaurant, Menu } from "./restaurant";
import { IUser } from "./user";

export interface IInsertReviewParames {
  transactionId: string;
  restaurantId: number;
  start: number;
  comment: string;
  menuIds: number[];
}

export interface IReview {
  id: number;
  star: number;
  comment: string;
  createdAt: string;
  transactionId: string;
  restaurant: Pick<IRestaurant, "id" | "name" | "logo">;
  menu: Omit<Item, "itemTotal">;
}

export interface IRestaurantReviewResponse {
  reviews: IReview[] & Pick<IUser, "id" | "name" | "avatar">;
}
