import { IGetRestaurantsParams } from "@/types/restaurant";
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
