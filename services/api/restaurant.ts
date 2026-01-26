import {
  IGetRestaurantDetailParams,
  IGetRestaurantsParams,
  IRestaurantDetails,
} from "@/types/restaurant";
import { api } from "./base";

export const getRecommendedRestaurants = async () => {
  const response = await api.get("/api/resto/recommended", {});

  return response.data;
};

export const getHomeRestaurants = async ({
  page,
  limit,
}: IGetRestaurantsParams) => {
  const response = await api.get("/api/resto", {
    params: {
      page,
      limit,
    },
  });
  return response.data;
};

export const getDetailRestaurant = async ({
  limitMenu,
  limitReview,
  id,
}: IGetRestaurantDetailParams) => {
  const response = await api.get(`/api/resto/${id}`, {
    params: {
      limitMenu,
      limitReview,
    },
  });

  return response.data;
};
