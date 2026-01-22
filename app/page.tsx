import Hero from "@/components/container/hero";
import LoadingSpinner from "@/components/container/loading-spinner";
import Menus from "@/components/container/menus";
import Navbar from "@/components/container/navbar";
import RestoCard from "@/components/container/restaurant-card";
import { useGetRecommendedRestaurants } from "@/services/hooks/restaurants";

export default function Home() {
  const { isPending, data } = useGetRecommendedRestaurants();

  // const {
  //   data,
  //   error,
  //   isError,
  //   isFetching,
  //   isFetchingNextPage,
  //   fetchNextPage,
  //   hasNextPage,
  //   status,
  // } = useGetInfiniteRestaurants({
  //   page: 1,
  // });
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Menus></Menus>
      <div className="flex flex-col items-center h-full w-full sm:w-125 md:w-full lg:w-250 xl:w-300 pt-6 pb-12 px-4 xl:gap-8 xl:py-0 xl:px-0">
        <div className="flex justify-between w-full h-fit">
          <h3 className="font-extrabold text-displayxs sm:text-displaysm lg:text-displaymd leading-displayxs sm:leading-displaysm lg:leading-displaymd text-neutral-950">
            Recommended
          </h3>
          <span className="font-extrabold text-base lg:text-lg leading-7.5 lg:leading-8 text-right text-primary-100">
            See All
          </span>
        </div>
        <div className="gric grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {isPending ? (
            <LoadingSpinner />
          ) : (
            data?.data.map((resto) => {
              return (
                <RestoCard
                  key={resto.id}
                  restoName={resto.name}
                  distance={resto.distance.toFixed(1)}
                  imagePath={resto.logo}
                  star={resto.star.toFixed(1)}
                  place={resto.place}
                ></RestoCard>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
