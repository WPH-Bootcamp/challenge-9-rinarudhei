import { IGetRestaurantsParams } from "@/types/restaurant";
import { api } from "./base";

export const getRecommendedRestaurants = async () => {
  const response = await api.get("/api/resto/recommended", {});

  return response.data;
};

export const getHomeRestaurants = async ({ page }: IGetRestaurantsParams) => {
  const response = await api.get("/api/resto", {
    params: {
      page,
    },
  });

  return response.data;
};
