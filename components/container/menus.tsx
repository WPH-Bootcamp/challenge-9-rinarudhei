import Menu from "../ui/menu";

export default function Menus() {
  const menus = [
    { path: "/menu_all_food.png", category: "All Restaurant" },
    { path: "/menu_nearby.png", category: "Nearby" },
    { path: "/menu_discount.png", category: "Discount" },
    { path: "/menu_best_seller.png", category: "Best Seller" },
    { path: "/menu_delivery.png", category: "Delivery" },
    { path: "/menu_lunch.png", category: "Lunch" },
  ];
  return (
    <div className="h-full w-screen xs:w-100 py-6 px-4 gap-5 md:gap-0 flex justify-between sm:w-125 md:w-full lg:w-250 xl:w-300 flex-wrap lg:mt-6">
      {menus.map((menu, i) => {
        return (
          <Menu key={i} imagePath={menu.path} category={menu.category}></Menu>
        );
      })}
    </div>
  );
}
