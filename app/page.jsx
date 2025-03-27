import {SiCoffeescript} from "react-icons/si";
import {PiForkKnifeFill} from "react-icons/pi";
import {BsFillPersonCheckFill} from "react-icons/bs";
import {TbBuildingStore} from "react-icons/tb";
import Link from "next/link";

const kelebihan = {
 name: "APA YANG BISA KAMI SAJIKAN?",
 items: [
  {
   name: "Foods",
   icon: <PiForkKnifeFill />,
   desctiption: "Kami menyajikan makanan terbaik kami dengan kualitas.",
  },
  {
   name: "Beverages",
   icon: <SiCoffeescript />,
   desctiption: "Minuman Kami Segar",
  },
  {
   name: "Services",
   icon: <BsFillPersonCheckFill />,
   desctiption: "Pelayanan Terbaik",
  },
  {name: "Tempat", icon: <TbBuildingStore />, desctiption: "Tempat Yang Luas"},
 ],
};

const menu = [
 {name: "Menu 1", image: "/menus/1.png", description: "ABCD"},
 {name: "Menu 1", image: "/menus/4.png", description: "DBCA"},
 {name: "Menu 1", image: "/menus/6.png", description: "CCBA"},
];

export default function Home() {
 return (
  <div className="flex flex-col">
   {/* Hero Section*/}
   <section
    className="h-screen w-full flex items-center justify-center text-white "
    style={{
     backgroundImage: "url('/1.jpeg')",
     height: "55vh",
     backgroundSize: "cover",
     backgroundPosition: "center",
    }}>
    <div className="text-center bg-black/40 h-full w-full flex flex-col gap-4 items-center justify-center px-10 pt-5">
     <h2 className="text-5xl font-bold">911 COFFEE TASIKMALAYA</h2>
     <p className="text-lg">GOOD COFFEE START FROM HERE</p>
    </div>
   </section>
   {/*Kelebihan*/}
   <section className="h-screen w-full flex items-center  bg-white">
    <div className="text-center h-full w-full flex flex-col gap-10  justify-center pl-[100px]">
     <div className="flex flex-col lg:flex-row gap-24 items-center justify-center">
      <div className="flex flex-col gap-3 w-full text-start ">
       <h1 className="text-5xl font-bold">{kelebihan.name}</h1>
       {kelebihan.items.map((item, index) => (
        <div
         key={index}
         className="flex gap-3 items-center">
         <div className="rounded-full w-10 h-10 bg-black text-white flex items-center justify-center">
          {item.icon}
         </div>
         <div className="flex flex-col items-start justify-center">
          <h1 className="text-lg font-semibold">{item.name}</h1>
          <p>{item.desctiption}</p>
         </div>
        </div>
       ))}
      </div>
      <div className="w-full overflow-hidden h-[400px] flex items-center rounded-l-2xl">
       <img
        src="/6.jpeg"
        alt=""
        className="w-full"
       />
      </div>
     </div>
    </div>
   </section>{" "}
   {/* Menu Section */}
   <section className="h-auto py-10 w-screen lg:w-full flex items-center justify-center bg-[#f4f4f4]">
    <div className="flex flex-col gap-6 items-center justify-center">
     <h1 className="text-3xl font-bold text-black/40">BEST SELLER MENU</h1>
     <div className="w-full flex flex-col lg:flex-row gap-6">
      {menu.map((item, index) => (
       <div
        key={index}
        className="flex flex-col gap-6 items-center justify-center w-[300px] border rounded-lg p-3 bg-slate-200 backdrop-blur-lg ">
        <img
         src={item.image}
         alt=""
         className="w-[150px]"
        />
        <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
        <p className="text-gray-600">{item.description}</p>
       </div>
      ))}
     </div>
     <Link
      href="/product"
      className="hover:underline">
      Lihat Semua Produk
     </Link>
    </div>
   </section>
   <section className="h-auto py-10 w-full gap-[100px] flex items-center justify-center px-[100px]">
    <div className="h-[400px] w-[300px] bg-black rounded-lg"></div>
    <div className="flex flex-col gap-3 max-w-[400px]">
     <h1 className="text-4xl font-bold">
      Kami selalu memberikan pelayanan terbaik untuk anda
     </h1>
     <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque placeat
      voluptatibus id repudiandae fugit perspiciatis maiores eius doloribus
      tempore consequuntur error eaque, explicabo quam quas harum? Fuga quam
      molestias repellat?
     </p>
    </div>
   </section>
  </div>
 );
}
