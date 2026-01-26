"use client";
import { DetailPagination } from "@/components/container/detailPagination";
import ErrorMessage from "@/components/container/error-message";
import FoodCard from "@/components/container/foodCard";
import Footer from "@/components/container/footer";
import Navbar from "@/components/container/navbar";
import RestoCard from "@/components/container/restaurant-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { useGetDetailRestaurant } from "@/services/hooks/restaurants";
import { useAppSelector } from "@/services/stores/store";
import { Star } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const { data, isPending, isError } = useGetDetailRestaurant({
    id,
    limitMenu: 8,
    limitReview: 6,
  });
  const token = useAppSelector((state) => state.auth.token);
  const [activeFilter, setActiveFilter] = useState(0);
  const filters = ["All Menu", "Food", "Drink"];
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/auth");
    }
  }, [token]);

  return (
    <>
      <Navbar></Navbar>
      {isError ? (
        <ErrorMessage errorMessage="Error getting restaurant details"></ErrorMessage>
      ) : (
        <div className="flex flex-col w-full h-fit pt-4 pb-10 px-4 gap-4 mt-16">
          {isError ? (
            <ErrorMessage errorMessage="Error loading data"></ErrorMessage>
          ) : isPending ? (
            <Spinner>Loading restaurant data...</Spinner>
          ) : (
            <>
              <DetailPagination data={data?.data}></DetailPagination>
              <RestoCard
                key={data.data.id}
                id={data.data.id}
                restoName={data.data.name}
                distance={"1.5"}
                imagePath={data.data.logo}
                star={data.data.star.toFixed(1)}
                place={data.data.place}
              ></RestoCard>
              <Separator />
              <div className="flex flex-col mb-6 gap-4 h-fit w-full">
                <h2 className="font-extrabold text-displayxs leading-displayxs text-neutral-950 w-full h-9 text-start">
                  Menu
                </h2>
                <div className="flex w-full h-fit gap-2">
                  {filters.map((f, i) => (
                    <Button
                      key={i}
                      className={`flex  h-10 border rounded-[100px] px-4 py-2 gap-2 ${i === activeFilter ? "bg-[#ffecec] border-primary-100" : "bg-white border-neutral-300"}`}
                      onClick={() => setActiveFilter(i)}
                    >
                      <p
                        className={`font-bold text-sm leading-7 tracking-tight ${i === activeFilter ? "text-primary-100" : "text-neutral-950"}`}
                      >
                        {f}
                      </p>
                    </Button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {data.data.menus.map((m, i) => (
                  <FoodCard
                    key={i}
                    id={m.id}
                    name={m.foodName}
                    price={m.price}
                    imagePath={m.image}
                  ></FoodCard>
                ))}
              </div>
              <Separator />
              <div className="w-90.25 gap-4 flex flex-col">
                <div className="gap-2 flex flex-col w-full h-fit"></div>
                <h2 className="font-extrabold text-displayxs leading-displayxs text-neutral-950 w-full h-9 text-start">
                  Menu
                </h2>
                <div className="flex gap-1 w-full h-fit">
                  <Star className="w-6 h-6 border-none fill-[#ffab0d] text-[#ffab0d]"></Star>
                  <p className="font-bold text-base leading-7.5">
                    {data.data.star.toFixed(1)} ({data.data.totalReviews}{" "}
                    ulasan)
                  </p>
                </div>
              </div>
              {/* {data.data.reviews.map((r, i) => (
                <ReviewCard key={i}></ReviewCard>
              ))} */}
            </>
          )}
        </div>
      )}
      <div className="w-full h-full bg-black">
        <Footer></Footer>;
      </div>
    </>
  );
}
