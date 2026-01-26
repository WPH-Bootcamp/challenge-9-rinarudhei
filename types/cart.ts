import { IRestaurant } from "./restaurant";

export interface ICartResponse {
  cart: Cart[];
  summary: Summary;
}

type Summary = {
  totalItems: number;
  totalPrice: number;
  restaurantCount: number;
};
type Cart = {
  restaurant: Pick<IRestaurant, "id" | "name" | "logo">;
  items: CartItem[];
  subTotal: number;
};

type CartItem = {
  id: number;
  menu: CartMenu;
  quantity: number;
  itemTotal: number;
};

type CartMenu = {
  id: number;
  foodName: string;
  price: number;
  type: string;
  image: string;
};
