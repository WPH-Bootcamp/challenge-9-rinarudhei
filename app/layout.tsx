import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { AppProps } from "next/app";
import { TanstackProvider } from "@/components/provider/tanstack-provider";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Foody Buns App",
  description:
    "Food Buns App to order your favorite Foody Buns Burger directly from your coach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  appProps: AppProps;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased w-screen max-w-98.25 sm:max-w-192 md:max-w-256 lg:max-w-360 min-w-98.25 bg-base-white flex flex-col justify-center mx-auto items-center h-full`}
      >
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
