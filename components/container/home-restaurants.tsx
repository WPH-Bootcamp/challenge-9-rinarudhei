import { useGetInfiniteRestaurants } from "@/services/hooks/restaurants";
import { Spinner } from "../ui/spinner";
import React from "react";
import RestoCard from "./restaurant-card";
import { Button } from "../ui/button";
import ErrorMessage from "./error-message";

export default function HomeRestaurants() {
  const {
    data,
    error,
    isError,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetInfiniteRestaurants({
    page: 1,
    limit: 10,
  });
  return (
    <div className="flex flex-col items-center h-full w-full sm:w-125 md:w-full lg:w-250 xl:w-300 pt-6 pb-12 px-4 gap-4 xl:gap-8">
      <div className="flex justify-between w-full h-fit">
        <h3 className="font-extrabold text-displayxs sm:text-displaysm lg:text-displaymd leading-displayxs sm:leading-displaysm lg:leading-displaymd text-neutral-950">
          Recommended
        </h3>
        <span className="font-extrabold text-base lg:text-lg leading-7.5 lg:leading-8 text-right text-primary-100">
          See All
        </span>
      </div>
      {isError ? (
        <ErrorMessage
          errorMessage={error ? error.message : "Error getting restaurant list"}
        ></ErrorMessage>
      ) : isFetching ? (
        <Spinner>Loading ...</Spinner>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 lg:gap-5">
            {data?.pages.map((page, i) => (
              <React.Fragment key={i}>
                {page.data.restaurants.map((resto) => (
                  <RestoCard
                    key={resto.id}
                    id={resto.id}
                    restoName={resto.name}
                    distance={resto?.distance?.toString(1) || "0"}
                    imagePath={resto.logo}
                    star={resto.star.toFixed(1)}
                    place={resto.place}
                  ></RestoCard>
                ))}
              </React.Fragment>
            ))}
          </div>
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetching || isFetchingNextPage}
            variant="outline"
            className="rounded-[100px] border border-neutral-300 p-2 gap-2 z-50 flex justify-center items-center w-40 h-12 sm:gap-4 md:gap-6 lg:gap-8 hover:bg-neutral-50 transition-colors"
          >
            <p
              className={`font-semibold text-center text-sm lg:text-base leading-7 lg:leading-7.5 ${hasNextPage && !isFetching && !isFetchingNextPage ? "text-neutral-950" : "text-neutral-300"}`}
            >
              {isFetchingNextPage ? "Loading more..." : "Show More"}
            </p>
          </Button>
        </>
      )}
    </div>
  );
}
