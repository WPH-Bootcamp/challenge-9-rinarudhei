import { Card } from "@/components/ui/card";
import Image from "next/image";

type MenuProps = {
  imagePath: string;
  category: string;
};

export default function Menu({ imagePath, category }: MenuProps) {
  return (
    <div className="h-full w-26.5 sm:w-29.5 xl:w-40.25 gap-1 lg:gap-1.5 flex flex-col items-center justify-center">
      <Card className="h-25 w-full rounded-2xl p-2 md:p-1 lg:p-2 gap-2 md:gap-1 lg:gap-2 bg-white shadow-lg flex justify-center items-center border-none">
        <Image
          src={imagePath}
          alt="menu all-food"
          width={100}
          height={100}
          className="w-12 h-12 lg:w-16 lg:h-16 xl:w-16.25 xl:h-16.25"
        />
      </Card>

      <p className="font-bold text-sm xl:text-lg leading-7 xl:leading-8 tracking-tight text-center text-neutral-950">
        {category}
      </p>
    </div>
  );
}
