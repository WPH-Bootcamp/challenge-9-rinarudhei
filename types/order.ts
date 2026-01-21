import { IRestaurant } from "./restaurant";

export interface IOrder {
  id: number;
  transactionId: number;
  status: Status;
  paymentMethod: string;
  deliveredAddress: string;
  phone: string;
  pricing: Pricing;
  restaurants: {
    restaurant: Pick<IRestaurant, "id" | "name" | "logo">;
    items: Item[];
    subTotal: number;
  }[];
  createdAt: string;
  updatedAt: string;
}

export type Item = {
  menuId: string;
  menuName: string;
  price: number;
  image: string;
  quantity: number;
  itemTotal: number;
};

type Pricing = {
  subTotal: number;
  deliveryFee: number;
  serviceFee: number;
  totalPrice: number;
};

export type Status =
  | "preparing"
  | "on_the_way"
  | "delivered"
  | "done"
  | "cancelled";
