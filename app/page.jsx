"use client";

import Link from "next/link";
import {useEffect, useState} from "react";

const menu = [
 {name: "Menu 1", image: "/menus/1.png", description: "ABCD"},
 {name: "Menu 1", image: "/menus/4.png", description: "DBCA"},
 {name: "Menu 1", image: "/menus/6.png", description: "CCBA"},
];

export default function Home() {
 const [backgroundIndex, setBackgroundIndex] = useState(0);
 const backgrounds = ["/1.jpeg", "/2.jpeg", "/3.jpeg"];

 useEffect(() => {
  const interval = setInterval(() => {
   setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  }, 3500); // Ganti gambar setiap 1.5 detik

  return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
 }, []);

 return (
  <div className="flex flex-col">
   {/* Hero Section*/}
   <section
    className="h-screen w-full flex items-center justify-center text-white"
    style={{
     backgroundImage: `url(${backgrounds[backgroundIndex]})`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     transition: "background-image 1s ease-in-out", // Transisi saat berganti gambar
    }}>
    <div className="text-center">
     <h2 className="text-4xl">Welcome to My Next App!</h2>
     <p className="mt-4">
      This is a simple example of a Next.js app with a loading page.
     </p>
    </div>
   </section>

   {/* Menu Section */}
   <section className="h-auto py-10 w-full flex items-center justify-center">
    <div className="flex flex-col gap-6 items-center justify-center">
     <h1 className="text-3xl font-bold text-black/40">BEST SELLER MENU</h1>
     <div className="w-full flex gap-6">
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
      href="/"
      className="hover:underline">
      See More
     </Link>
    </div>
   </section>
  </div>
 );
}
