"use client";

import { useEffect, useState } from "react";
import { FileText, LogOut, MapPin, Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./logo";
import { cn, generateAvatarFallback } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useAppSelector } from "@/services/stores/store";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Separator } from "../ui/separator";
import { useLogout } from "@/services/hooks/auth";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { token } = useAppSelector((state) => state.auth);
  const { name, avatar } = useAppSelector((state) => state.user);
  const { logout } = useLogout();
  const pathname = usePathname();
  const { items: foods } = useAppSelector((state) => state.food);

  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token]);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full backdrop-blur-sm max-w-360  ${isLogin ? "bg-transparent sm:bg-base-white" : "bg-transparent"}`}
    >
      <div className="mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Logo isLogin={isLogin} />
        </div>

        <div className="flex items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-5.5 xl:gap-6">
          {isLogin && (
            <button className="relative p-2 hover:bg-white/10 rounded-lg">
              <ShoppingBag
                className={
                  pathname === "/" ? "text-white sm:text-black" : "text-black"
                }
              />
              {foods && foods.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {foods.reduce((prev, f) => prev + f.quantity, 0)}
                </span>
              )}
            </button>
          )}
          {!isLogin && (
            <div className="sm:flex gap-4 hidden items-center">
              <Button
                asChild
                variant="outline"
                className={cn(
                  "lg:w-40.75 lg:h-12 md:w-36.75 md:h-10 sm:w-28.75 sm:h-8",
                  "rounded-full",
                  "border-2 border-neutral-300",
                  "gap-2",
                  "p-2",
                  "bg-transparent",
                  "hover:bg-neutral-50",
                  "text-base-white",
                  "text-base",
                  "leading-7.5",
                  "tracking-tight",
                  "cursor-pointer",
                )}
              >
                <Link href="/auth">Sign In</Link>
              </Button>
              <Button
                className={cn(
                  "w-40.75 h-12 lg:w-40.75 lg:h-12 md:w-36.75 md:h-10 sm:w-28.75 sm:h-8",
                  "rounded-full",
                  "bg-white text-black",
                  "gap-2",
                  "p-2",
                  "hover:bg-gray-50",
                  "border-none",
                  "text-base",
                  "leading-7.5",
                  "tracking-tight",
                  "cursor-pointer",
                )}
              >
                <Link href="/auth/?form=signup">Sign Up</Link>
              </Button>
            </div>
          )}
          {isLogin && (
            <Popover>
              <PopoverTrigger>
                <div className="flex gap-4 items-center">
                  <Avatar className={isLogin ? "inline" : "hidden"}>
                    <AvatarImage
                      src={avatar}
                      alt="user avatar"
                      className="rounded-full w-10 h-10 lg:w-12 lg:h-12"
                    />
                    <AvatarFallback>
                      <div className="rounded-full w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center border-2 border-neutral-500 text-lg md:text-xl lg:text-2xl text-neutral-500 bg-neutral-100">
                        {generateAvatarFallback(name)}
                      </div>
                    </AvatarFallback>
                  </Avatar>
                  <p className="hidden sm:inline text-neutral-950 text-lg leading-8">
                    {name}
                  </p>
                </div>
              </PopoverTrigger>
              <PopoverContent className="border-none mt-2 mr-3.5">
                <div className="flex flex-col w-49.25 rounded-2xl p-4 gap-3 bg-white">
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarImage
                        src={avatar}
                        alt="user avatar"
                        className="rounded-full w-9 h-9 lg:w-10 lg:h-10"
                      />
                      <AvatarFallback>
                        <div className="rounded-full w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center border-2 border-neutral-500 text-lg text-neutral-500 bg-neutral-100">
                          {generateAvatarFallback(name)}
                        </div>
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-neutral-950 text-base leading-7.5">
                      {name}
                    </p>
                  </div>
                  <Separator />
                  <div className="flex gap-2">
                    <MapPin></MapPin>
                    <p className="text-neutral-950 text-sm leading-7">
                      Delivery Address
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <FileText></FileText>
                    <p className="text-neutral-950 text-sm leading-7">
                      My Orders
                    </p>
                  </div>
                  <div className="flex gap-2" onClick={handleLogout}>
                    <LogOut></LogOut>
                    <p className="text-neutral-950 text-sm leading-7">Logout</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
          {!isLogin && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 hover:text-white sm:hidden"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 backdrop-blur-lg border-white/10 gap-8 flex flex-col sm:hidden"
              >
                <SheetHeader>
                  <SheetTitle className="text-white text-left">
                    Account
                  </SheetTitle>
                </SheetHeader>

                <div className="gap-6 flex justify-center">
                  <div className="gap-4 flex flex-col w-full px-4">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full justify-start h-12 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
                    >
                      <Link href="/auth">
                        <svg
                          className="mr-3 h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                          />
                        </svg>
                        Login
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="default"
                      className="w-full justify-start h-12 bg-white text-black hover:bg-gray-100"
                    >
                      <Link href="/auth/?form=signup">
                        <svg
                          className="mr-3 h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                          />
                        </svg>
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
}
