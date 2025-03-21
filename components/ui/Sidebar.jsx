import Link from "next/link";

const Sidebar = () => {
 return (
  <div className="flex flex-col items-start text-center gap-5">
   <Link
    href="/product"
    className="py-3 px-2 bg-white text-black rounded-xl w-[300px] hover:bg-white/70">
    Promo
   </Link>
   <Link
    href="/product/foods"
    className="py-3 px-2 bg-white text-black rounded-xl w-[300px] hover:bg-white/70">
    Foods
   </Link>
   <Link
    href="/product/beverages"
    className="py-3 px-2 bg-white text-black rounded-xl w-[300px] hover:bg-white/70">
    Beverages
   </Link>
   <Link
    href="/"
    className="py-3 px-2 bg-white text-black rounded-xl w-[300px] hover:bg-white/70">
    Packages
   </Link>
  </div>
 );
};

export default Sidebar;
