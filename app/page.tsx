"use client";

import Footer from "@/components/container/footer";
import Hero from "@/components/container/hero";
import HomeRestaurants from "@/components/container/home-restaurants";
import Menus from "@/components/container/menus";
import Navbar from "@/components/container/navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Menus></Menus>
      <HomeRestaurants></HomeRestaurants>
      <Footer></Footer>
    </>
  );
}
