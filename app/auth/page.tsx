"use client";
import LoginForm from "@/components/container/login-form";
import Logo from "@/components/container/logo";
import RegisterForm from "@/components/container/register-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Auth() {
  const params = useSearchParams();
  const formType = params.get("form");
  return (
    <div className="w-screen h-screen flex items-center justify-between bg-white">
      <div className="w-full md:w-1/2 h-full hidden relative md:inline">
        <Image
          src="/BurgerLogin.png"
          fill
          sizes="full"
          alt="Patty Burger PNG"
          className="object-cover w-full h-full absolute"
          loading="eager"
        ></Image>
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-center items-center bg-white">
        <div className="flex flex-col items-start justify-center w-86.25 lg:w-93.5 gap-4">
          <Logo isLogin={true} isRegister={true}></Logo>
          <div className="flex flex-col gap-1 h-fit w-full">
            <h2 className="font-extrabold text-displayxs leading-displayxs lg:text-displaysm lg:leading-displaysm ">
              Welcome Back
            </h2>
            <p className="text-sm leading-7 lg:text-base lg:leading-7.5">
              Good to see you again! Let&lsquo;s eat
            </p>
          </div>
          <Tabs
            defaultValue={formType || "signin"}
            className="w-full box-border gap-4 lg:gap-5"
          >
            <TabsList className="px-2 py-6 lg:py-7 gap-2 w-full rounded-2xl bg-neutral-100 h-12 md:h-20 box-border">
              <TabsTrigger
                value="signin"
                className="text-base leading-7.5 tracking-tight rounded-md h-9 lg:h-10 lg:rounded-xl py-2 px-3 gap-2"
              >
                Sign in
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="text-base leading-7.5 tracking-tight rounded-md h-9 lg:h-10 lg:rounded-xl py-2 px-3 gap-2"
              >
                Sign up
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="signin"
              className="text-sm text-muted-foreground"
            >
              <LoginForm></LoginForm>
            </TabsContent>
            <TabsContent
              value="signup"
              className="text-sm text-muted-foreground"
            >
              <RegisterForm></RegisterForm>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
