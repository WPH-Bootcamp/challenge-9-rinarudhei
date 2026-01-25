import type { Metadata } from "next";
import "./globals.css";
import { ClientProvider } from "@/components/provider/clientProvider";
import HtmlWrapper from "@/components/provider/htmlWrapper";

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
    <HtmlWrapper>
      <ClientProvider>{children}</ClientProvider>
    </HtmlWrapper>
  );
}
