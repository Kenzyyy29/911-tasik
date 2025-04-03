"use client";

import Link from "next/link";
import {useState} from "react";

const items = [
 {
  name: "Barista",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
  image: "/employee/1.jpg",
 },
 {
  name: "Kitchen",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
  image: "/employee/2.jpg",
 },
 {
  name: "Waitress",
  description:
   " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
  image: "/employee/3.jpg",
 },
];

const SearchBox = () => {
 const [searchTerm, setSearchTerm] = useState("");
 const [visibleItem, setVisibleItem] = useState(null);

 const filteredItems = items.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
 );

 const handleItemClick = (item) => {
  if (visibleItem && visibleItem.name === item.name) {
   setVisibleItem(null);
  } else {
   setVisibleItem(item);
  }
 };

 return (
  <section className="min-h-screen text-center px-5 lg:px-10 py-10 w-full">
   <h1 className="text-3xl lg:text-4xl font-bold">Search your interest here</h1>
   <div className="p-4 flex flex-col gap-[50px] items-center justify-center w-full">
    <input
     type="text"
     placeholder="Search..."
     className="border p-2 rounded bg-transparent w-full lg:max-w-[500px] hover:outline-none"
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center w-full">
     {filteredItems.length > 0 ? (
      filteredItems.map((item, index) => (
       <div
        key={index}
        className="w-full">
        <div
         className=" cursor-pointer rounded-lg flex flex-col items-center justify-center overflow-hidden h-[300px]"
         onClick={() => handleItemClick(item)}
         style={{
          backgroundImage: `url(${item.image})`,
          height: "55vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
         }}>
         <div className="bg-black/60 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-white">{item.name}</h1>
          <p className="text-white hidden">{item.description}</p>
         </div>
        </div>
       </div>
      ))
     ) : (
      <div className="p-2">No items found</div>
     )}
    </div>
   </div>
  </section>
 );
};

export default SearchBox;
