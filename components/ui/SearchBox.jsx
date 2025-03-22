"use client";

import Link from "next/link";
import {useState} from "react";

const items = [
 {
  name: "Barista",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
 },
 {
  name: "Kitchen",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
 },
 {
  name: "Waitress",
  description:
   " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
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
  <section className="h-screen text-center px-10 py-10">
   <h1 className="text-3xl lg:text-4xl font-bold">Search your interest here</h1>
   <div className="p-4 flex flex-col gap-[80px] items-center justify-center">
    <input
     type="text"
     placeholder="Search..."
     className="border p-2 rounded bg-transparent w-full lg:max-w-[500px] hover:outline-none"
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className="grid grid-cols-1 lg:grid-cols-3  gap-10 items-center w-full">
     {filteredItems.length > 0 ? (
      filteredItems.map((item, index) => (
       <div key={index}>
        <div
         className="p-2 border cursor-pointer h-[300px]"
         onClick={() => handleItemClick(item)}>
         {item.name}
        </div>
        {visibleItem && visibleItem.name === item.name && (
         <div className="flex flex-col lg:flex-row gap-10 items-center border-b border-r border-l p-4">
          <div className="flex flex-col gap-4   rounded bg-transparent w-full text-start">
           <img
            src={visibleItem.image}
            alt=""
            className="w-[130px] h-[80px] animate-pulse lg:hidden"
           />
           <h2 className="text-lg font-bold">{visibleItem.name}</h2>
           <p>{visibleItem.description}</p>
           <div className="hover:underline">
            <Link href={visibleItem.path}>Try to sign</Link>
           </div>
          </div>
         </div>
        )}
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
