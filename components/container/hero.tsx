import { Search } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-w-98.25 w-screen h-162 sm:h-190 md:h-196 lg:h-202 xl:h-206.75 max-w-160 sm:max-w-192  md:max-w-256 lg:max-w-360 relative flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black/0 from-0% to-black/80 z-40"></div>
      <div className="absolute top-52.5 sm:top-57.5 md:top-65 lg:top-72 xl:top-81.5 w-87.25 sm:w-102 md:w-132 lg:w-158 xl:w-178 z-41 text-white  flex flex-col items-center justify-center gap-6 sm:gap-7 md:gap-8 lg:gap-9 xl:gap-10">
        <div className="flex flex-col justify-center items-center gap-1 md:gap-2">
          <h1 className="font-extrabold text-displaylg leading-displaylg md:text-displayxl md:leading-displayxl lg:text-display2xl lg:leading-display2xl text-center text-base-white">
            Explore Culinary Experiences
          </h1>
          <p className="md:font-bold text-lg leading-8 md:text-xl md:leading-8.5 lg:text-displayxs lg:leading-displayxs tracking-tight text-center text-base-white">
            Search and refine your choice to discover the perfect restaurant
          </p>
        </div>
        <div className="h-12 rounded-full py-2 px-4 md:px-5 lg:px-6 bg-base-white gap-1.5 flex justify-start items-center w-full">
          <Search className="text-neutral-500" />
          <p className="text-sm leading-7 md:text-base md:leading-7.5  tracking-tight text-neutral-600">
            Search restaurants, food and drink
          </p>
        </div>
      </div>
      <Image
        src="/BurgerHero.png"
        fill
        alt="Burger Hero Image PNG"
        className="object-cover min-w-98.25 max-h-full"
      />
    </div>
  );
}
