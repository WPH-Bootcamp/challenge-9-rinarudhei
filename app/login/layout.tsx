import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../globals.css";
import { TanstackProvider } from "@/components/provider/tanstack-provider";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Auth Page",
  description: "Register Account or login to Food Buns Burger App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body
        className={`${nunito.className} antialiased w-screen max-w-360  bg-base-white flex flex-col justify-center mx-auto items-center h-full p-0 m-0 box-border`}
      >
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
