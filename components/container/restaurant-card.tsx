import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

type RestoCardProps = {
  imagePath: string;
  restoName: string;
  star: string;
  place: string;
  distance: string;
};

export default function RestoCard({
  imagePath,
  restoName,
  star,
  place,
  distance,
}: RestoCardProps) {
  return (
    <Card className="flex flex-row gap-4 p-4 w-full bg-white border-none shadow-lg">
      <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
        <Image
          src={imagePath}
          alt={`${restoName} logo`}
          fill
          sizes="full"
          className="object-cover"
        />
      </div>
      <CardContent className="flex flex-col p-0 gap-2">
        <h4 className="font-bold text-lg text-neutral-900">{restoName}</h4>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          <span className="font-medium text-neutral-900">{star}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <span>{place}</span>
          <div className="w-1 h-1 rounded-full bg-neutral-300" />
          <span>{distance} km</span>
        </div>
      </CardContent>
    </Card>
  );
}
