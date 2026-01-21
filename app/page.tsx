import Hero from "@/components/container/hero";
import Navbar from "@/components/container/navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="h-20 bg-green-800 text-white z-50">MANTAP</div>
    </>
  );
}
