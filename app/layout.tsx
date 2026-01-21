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
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  );
}
