import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent } from "../ui/card";
import { generateAvatarFallback } from "@/lib/utils";
import dayjs from "dayjs";
import { Star } from "lucide-react";

type ReviewCardProps = {
  comments: string;
  name: string;
  avatar: string;
  star: number;
  createdAt: string;
};
export default function ReviewCard({
  comments,
  name,
  avatar,
  star,
  createdAt,
}: ReviewCardProps) {
  const createdAtFormatted = dayjs(createdAt).format("DD-MMMM-YY hh:mm");
  let stars = [];
  for (let i = 0; i < star; i++) {
    stars.push(i);
  }
  return (
    <Card className="w-90.1 h-fit rounded-2xl p-4 gap-4 shadow-sm bg-white flex flex-col">
      <div className="flex h-fit w-fit gap-3">
        <Avatar className="">
          <AvatarImage
            src={avatar}
            alt="user avatar"
            className="rounded-full w-14.5 h-14.5 "
          />
          <AvatarFallback>
            <div className="rounded-full w-14.5 h-14.5 flex justify-center items-center border-2 border-neutral-500 text-lg md:text-xl lg:text-2xl text-neutral-500 bg-neutral-100">
              {generateAvatarFallback(name)}
            </div>
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col h-fit w-fit">
          <p className="text-base leading-7.5 font-extrabold text-neutral-950">
            {name}
          </p>
          <p className="text-base leading-7 text-neutral-950 tracking-tight">
            {createdAtFormatted}
          </p>
        </div>
      </div>
      <div className="flex w-fit h-fit">
        {stars.map((s) => (
          <Star className="w-6 h-6 border-none fill-[#ffab0d] text-[#ffab0d]"></Star>
        ))}
      </div>
      <p className="text-base leading-7.5 tracking-tight text-neutral-950">
        {comments}
      </p>
    </Card>
  );
}
