"use client";

import Hero from "@/components/container/hero";
import HomeRestaurants from "@/components/container/home-restaurants";
import Menus from "@/components/container/menus";
import Navbar from "@/components/container/navbar";
import RestoCard from "@/components/container/restaurant-card";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Menus></Menus>
      <HomeRestaurants></HomeRestaurants>
    </>
  );
}
