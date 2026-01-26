import { IRestaurantDetails } from "@/types/restaurant";
import Image from "next/image";

type DetailPaginationProps = {
  data: IRestaurantDetails | undefined;
};

export default function DetailGrid({ data }: DetailPaginationProps) {
  return (
    <div className="md:grid grid-rows-3 grid-cols-4 gap-5 hidden h-117.5 max-w-300">
      <div className="row-span-3 col-span-2 rounded-2xl relative">
        <Image
          src={data?.images[0] as string}
          alt="Food Image 1"
          fill
          className="object-fit w-full h-full absolute rounded-2xl"
        ></Image>
      </div>
      <div className="row-span-2 col-span-2 rounded-2xl relative">
        <Image
          src={data?.images[1] as string}
          alt="Food Image 2"
          fill
          className="object-fit w-full h-full absolute rounded-2xl"
        ></Image>
      </div>
      <div className="row-span-1 col-span-1 rounded-2xl relative">
        <Image
          src={data?.images[2] as string}
          alt="Food Image 3"
          fill
          className="object-fit w-full h-full absolute rounded-2xl"
        ></Image>
      </div>
      <div className="row-span-1 col-span-1 rounded-2xl relative">
        <Image
          src={data?.images[3] as string}
          alt="Food Image 4"
          fill
          className="object-fit w-full h-full absolute rounded-2xl"
        ></Image>
      </div>
    </div>
  );
}
