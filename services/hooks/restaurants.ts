import { ISuccessPaginationResponse, ISuccessResponse } from "@/types/response";
import {
  IGetRestaurantsParams,
  IRecommendedRestaurant,
  IRestaurant,
} from "@/types/restaurant";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
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

export const useGetInfiniteRestaurants = (params: IGetRestaurantsParams) => {
  return useInfiniteQuery<ISuccessPaginationResponse<IRestaurant>, AxiosError>({
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
