"use client";
import { Nunito } from "next/font/google";
import { usePathname } from "next/navigation";
import React from "react";

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});
type HtmlWrapperProps = {
  children: React.ReactNode;
};

export default function HtmlWrapper({ children }: HtmlWrapperProps) {
  const pathname = usePathname();

  return (
    <html
      lang="en"
      className={pathname?.startsWith("/auth") ? "bg-white" : "bg-black"}
    >
      <body
        className={`${nunito.className} antialiased w-screen max-w-360  bg-base-white flex flex-col justify-center mx-auto items-center h-full p-0 m-0 box-border`}
      >
        {children}
      </body>
    </html>
  );
}
