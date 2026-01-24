"use client";
import Logo from "@/components/container/logo";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleEyeToggle = () => {
    setShowPassword((prev) => !prev);
  };

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
          <Tabs defaultValue="signin" className="w-full box-border">
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
              <FieldGroup className="grid gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="user-email">Email</Label>
                  <Input
                    id="user-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="relative">
                    <Label htmlFor="user-passsword">Password</Label>
                    <Input
                      id="user-password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      onClick={handleEyeToggle}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "65%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {showPassword ? <EyeOff size="16" /> : <Eye />}
                    </span>
                  </div>
                </div>
                <Field orientation="horizontal" className="w-full">
                  <Checkbox
                    id="remember-checkbox"
                    name="remember-checkbox"
                    className="data-[state=checked]:bg-primary-100 data-[state=checked]:border-none"
                  />
                  <Label
                    htmlFor="remember-checkbox"
                    className="text-sm leading-7 lg:text-base lg:leading-7.5 text-neutral-950"
                  >
                    Remember Me
                  </Label>
                </Field>
                <Button
                  type="submit"
                  variant="default"
                  className=" w-full h-12 rounded-[100px] bg-primary-100"
                >
                  <span className="text-sm leading-7 lg:text-base lg:leading-7.5 text-neutral-25">
                    Login
                  </span>
                </Button>
              </FieldGroup>
            </TabsContent>
            <TabsContent value="b" className="text-sm text-muted-foreground">
              Konten B
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
