"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { IRestaurantDetails } from "@/types/restaurant";
import Image from "next/image";
import { useState } from "react";
type DetailPaginationProps = {
  data: IRestaurantDetails | undefined;
};
export function DetailPagination({ data }: DetailPaginationProps) {
  const [activeImageId, setActiveImageId] = useState(1);
  const images = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <Pagination>
      <PaginationContent className="flex flex-col gap-3">
        <PaginationItem>
          <div className="w-90.25 h-[260.63px] rounded-2xl relative">
            <Image
              src={data?.images[activeImageId - 1] as string}
              alt="Food Image"
              fill
              className="object-fit w-full h-full absolute rounded-2xl"
            ></Image>
          </div>

          <div className="flex gap-1 justify-center">
            {images.map((img, i) => (
              <PaginationLink key={i} className="h-fit w-fit">
                <div
                  className={`w-2 h-2 rounded-full ${img.id === activeImageId ? "bg-primary-100" : "bg-[#d9d9d9]"}`}
                  onClick={() => setActiveImageId(i + 1)}
                ></div>
              </PaginationLink>
            ))}
          </div>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
