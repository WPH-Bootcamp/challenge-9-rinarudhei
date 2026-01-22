import Hero from "@/components/container/hero";
import Menus from "@/components/container/menus";
import Navbar from "@/components/container/navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Menus></Menus>
    </>
  );
}
