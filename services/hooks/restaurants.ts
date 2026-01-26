import { ISuccessPaginationResponse, ISuccessResponse } from "@/types/response";
import {
  IGetRestaurantDetailParams,
  IGetRestaurantsParams,
  IRecommendedRestaurant,
  IRestaurant,
  IRestaurantDetails,
} from "@/types/restaurant";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  getDetailRestaurant,
  getHomeRestaurants,
  getRecommendedRestaurants,
} from "../api/restaurant";

export const useGetRecommendedRestaurants = () => {
  return useQuery<ISuccessResponse<IRecommendedRestaurant[]>, AxiosError>({
    queryKey: ["recommended-restaurants"],
    queryFn: () => getRecommendedRestaurants(),
    staleTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};

export const useGetDetailRestaurant = (params: IGetRestaurantDetailParams) => {
  return useQuery<ISuccessResponse<IRestaurantDetails>, AxiosError>({
    queryKey: ["detail-restaurant", params],
    queryFn: () => getDetailRestaurant(params),
    staleTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};

export const useGetInfiniteRestaurants = (params: IGetRestaurantsParams) => {
  return useInfiniteQuery<
    ISuccessPaginationResponse<{ restaurants: IRestaurant[] }>,
    AxiosError
  >({
    initialPageParam: 1,
    queryKey: ["infinity-restaurant", params],
    queryFn: ({ pageParam }) =>
      getHomeRestaurants({ ...params, page: pageParam as number }),
    getNextPageParam: (responseData) => {
      if (
        responseData.data.pagination.page <
        responseData.data.pagination.totalPages
      )
        return responseData.data.pagination.page + 1;
      else return undefined;
    },
  });
};
