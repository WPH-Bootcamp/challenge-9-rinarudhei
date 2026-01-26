import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { useAppDispatch, useAppSelector } from "@/services/stores/store";
import { useEffect, useState } from "react";
import { generateRupiahString } from "@/lib/utils";
import { Button } from "../ui/button";
import { FoodCartItem } from "@/types/restaurant";
import { Minus, Plus } from "lucide-react";
import { addFood, removeFood } from "@/app/details/[id]/foodSlice";

type FoodCardProps = {
  id: number;
  imagePath: string;
  name: string;
  price: number;
};
export default function FoodCard({
  imagePath,
  name,
  price,
  id,
}: FoodCardProps) {
  const [quantity, setQuantity] = useState<number>(0);
  const { items: foods } = useAppSelector((state) => state.food);
  const dispatch = useAppDispatch();
  useEffect(() => {
    let foodIndex = foods.findIndex((f) => f.id === id);
    if (foodIndex >= 0) {
      setQuantity(foods[foodIndex].quantity);
    } else {
      setQuantity(0);
    }
  }, [foods]);

  const handleAddFood = () => {
    dispatch(addFood({ id, imagePath, name, price, quantity: quantity + 1 }));
  };
  const handleRemoveFood = () => {
    dispatch(removeFood(id));
  };
  return (
    <Card className="flex flex-col w-32 xs:w-43 h-full rounded-2xl bg-white shadow-sm p-0 gap-0 justify-between border border-white">
      <div className="h-43 w-full rounded-t-2xl relative">
        <Image
          src={imagePath}
          alt="Food Card picture"
          fill
          className="object-contain max-w-full max-h-full absolute rounded-t-2xl"
        ></Image>
      </div>
      <div className="flex flex-col p-3 gap-4 w-full h-fit">
        <div className="flex flex-col h-fit w-22.75">
          <p className="text-sm leading-7 tracking-tight text-neutral-950 w-full text-nowrap">
            {name}
          </p>
          <span className="font-extrabold text-base leading-7.5 tracking-tight text-neutral-950">
            {generateRupiahString(price)}
          </span>
        </div>
        {quantity > 0 ? (
          <div className="w-full h-9 gap-4 flex ">
            <div
              className="rounded-full border-[0.81px] border-neutral-300 w-9 h-9 p-[6.5px] gap-[6.5px] bg-white flex justify-center items-center"
              onClick={handleRemoveFood}
            >
              <Minus width={19.5} height={19.5}></Minus>
            </div>
            <p className="font-bold text-base leading-7.5 tracking-tight">
              {quantity}
            </p>
            <div
              className="rounded-full w-9 h-9 p-[6.5px] gap-[6.5px] bg-primary-100 flex justify-center items-center"
              onClick={handleAddFood}
            >
              <Plus
                width={19.5}
                height={19.5}
                className="bg-primary-100 text-white"
              ></Plus>
            </div>
          </div>
        ) : (
          <Button
            className="bg-primary-100 w-full xs:w-37 h-9 rounded-[100px] p-2 gap-2"
            onClick={handleAddFood}
          >
            <p className="font-bold text-sm leading-7 tracking-tight">Add</p>
          </Button>
        )}
      </div>
    </Card>
  );
}
