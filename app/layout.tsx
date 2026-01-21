import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap", // 'swap' ensures a fallback font is displayed while Nunito loads
  variable: "--font-nunito", // Define a CSS variable name
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
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased w-screen max-w-98.25 sm:max-w-192 md:max-w-256 lg:max-w-360 min-w-98.25 bg-base-black flex flex-col justify-center mx-auto items-center`}
      >
        {children}
      </body>
    </html>
  );
}
