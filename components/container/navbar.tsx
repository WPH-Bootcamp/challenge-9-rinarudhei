"use client";

import { useState } from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <nav
      className={`fixed top-0 z-50 w-full backdrop-blur-sm max-w-160 sm:max-w-192  md:max-w-256 lg:max-w-360  min-w-99.5 ${isLogin ? "bg-base-white" : "bg-tranparent"}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Logo isLogin={isLogin} />
        </div>

        <div className="flex items-center gap-4 sm:gap-4.5 md:gap-5 lg:gap-5.5 xl:gap-6">
          {isLogin && (
            <button className="relative p-2 hover:bg-white/10 rounded-lg">
              <ShoppingBag className={isLogin ? "text-black" : "text-white"} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
          )}
          {!isLogin && (
            <div className="sm:flex gap-4 hidden items-center">
              <Button
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
                )}
              >
                Sign In
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
                )}
              >
                Sign Up
              </Button>
            </div>
          )}
          {isLogin && (
            <div className="sm:flex gap-4 hidden items-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="rounded-full w-10 h-10 lg:w-12 lg:h-12"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className="hidden sm:inline text-neutral-950 text-lg leading-8">
                Rinaldi Adrian
              </p>
            </div>
          )}
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
                    variant="outline"
                    className="w-full justify-start h-12 bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      setIsOpen(false);
                      console.log("Login clicked");
                    }}
                  >
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
                  </Button>

                  <Button
                    variant="default"
                    className="w-full justify-start h-12 bg-white text-black hover:bg-gray-100"
                    onClick={() => {
                      setIsOpen(false);
                      console.log("Signup clicked");
                    }}
                  >
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
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
