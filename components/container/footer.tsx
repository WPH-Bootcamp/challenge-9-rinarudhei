import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "./logo";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-25 w-full h-fit flex flex-col lg:gap-20 xl:gap-52.5 lg:flex-row border-t border-neutral-300 py-10 px-4 gap-6 max-w-360 lg:justify-between sm:py-10 sm:px-30 md:px-10 lg:py-15 xl:py-20 lg:px-30 ">
      <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 lg:w-95">
        <div className="flex flex-col gap-4 lg:gap-5.5">
          <Logo isLogin={true} isFooter={true}></Logo>
          <p className="text-base leading-7.5 tracking-tight w-full lg:w-95">
            Enjoy homemade flavors & chef’s signature dishes, freshly prepared
            every day. Order online or visit our nearest branch.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold text-sm leading-7 tracking-tight text-start text-neutral-25 lg:text-base lg:leading-7.5 lg:tracking-normal">
            Follow on Social Media
          </p>
          <div className="gap-3 flex">
            <div className="w-10 h-10 border border-neutral-800 rounded-full flex justify-center items-center">
              <Facebook className="w-full h-full text-neutral-25 p-1" />
            </div>
            <div className="w-10 h-10 border border-neutral-800 rounded-full flex justify-center items-center">
              <Instagram className="w-full h-full text-neutral-25 p-2" />
            </div>
            <div className="w-10 h-10 border border-neutral-800 rounded-full flex justify-center items-center">
              <Linkedin className="w-full h-full text-neutral-25 p-2" />
            </div>
            <div className="w-10 h-10 border border-neutral-800 rounded-full flex justify-center items-center">
              <FaTiktok className="w-full h-full text-neutral-25 p-2" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-between lg:w-full lg:gap-40 xl:gap-52.5">
        <div className="flex flex-col gap-4 w-full">
          <small className="text-sm leading-none font-extrabold">Explore</small>
          <p className="text-neutral-25 text-sm w-full text-nowrap">All Food</p>
          <p className="text-neutral-25 text-sm w-full text-nowrap">Nearby</p>
          <p className="text-neutral-25 text-sm w-full text-nowrap">Discount</p>
          <p className="text-neutral-25 text-sm w-full text-nowrap">
            Best Seller
          </p>
          <p className="text-neutral-25 text-sm w-full text-nowrap">Delivery</p>
          <p className="text-neutral-25 text-sm w-full text-nowrap">Lunch</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <small className="text-sm leading-none font-extrabold">Help</small>
          <p className="text-neutral-25 text-sm w-full text-nowrap">
            How to Order
          </p>
          <p className="text-neutral-25 text-sm w-full text-nowrap">
            Payment Methods
          </p>
          <p className="text-neutral-25 text-sm w-full text-nowrap">
            Track My Order
          </p>
          <p className="text-neutral-25 text-sm w-full text-nowrap">FAQ</p>
          <p className="text-neutral-25 text-sm w-full text-nowrap">
            Contact Us
          </p>
        </div>
      </div>
    </footer>
  );
}
