"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

// icons
import {IoIosArrowDown} from "react-icons/io";

const MoreLink = [
 {
  name: "Contact Us",
  path: "/",
 },
 {
  name: "FAQ",
  path: "/",
 },
 {name: "Career", path: "/"},
];

const Flyout = ({isVisible, onMouseEnter, onMouseLeave}) => {
 if (!isVisible) return null;

 return (
  <div
   onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}
   className="absolute z-10 w-[200px] h-[200px] top-[40px] lg:left-[660px] 2xl:left-[1115px] flex flex-col p-4">
   <div className="p-5 w-full flex gap-10 bg-tertiary border border-primary bg-white text-black rounded-lg shadow-md">
    <div className="flex flex-col gap-5">
     <div className="flex flex-col gap-3 text-primary">
      {MoreLink.map((item, index) => (
       <Link
        href={item.path}
        key={index}
        className="hover:underline 2xl:text-lg">
        {item.name}
       </Link>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

const Header = () => {
 const [flyout, setFlyout] = useState(false);
 const [header, setHeader] = useState(false);

 const scrollHeader = () => {
  if (window.scrollY >= 20) {
   setHeader(true);
  } else {
   setHeader(false);
  }
 };

 useEffect(() => {
  window.addEventListener("scroll", scrollHeader);
  return () => {
   window.removeEventListener("scroll", scrollHeader);
  };
 }, []);

 return (
  <header
   className={`fixed z-10 top-0 px-[100px] w-full justify-between flex items-center left-0 transition-all duration-700 ${
    header ? "bg-black shadow-lg px-6 py-6" : "px-6 py-8 bg-transparent"
   }`}>
   <nav className="flex gap-10">
    <Link
     href="/"
     className={`logo text-4xl ${header ? "text-white" : "text-white"}`}
     style={{fontFamily: "Agency FB"}}>
     9/1/1
    </Link>
    <ul
     className={`hidden lg:flex items-center gap-6 transition-all duration-500 font-semibold  ${
      header ? ` text-white` : ` text-white`
     }`}>
     <Link href="/about-us">About Us</Link>
     <Link href="/">Product</Link>
     <Link href="/">Blog</Link>
     <Link href="/">Franchise</Link>
     <button
      onMouseEnter={() => setFlyout(true)}
      onMouseLeave={() => setFlyout(false)}
      className="flex justify-center items-center">
      More <IoIosArrowDown className=" mt-1" />
     </button>
     <Flyout
      isVisible={flyout}
      onMouseEnter={() => setFlyout(true)}
      onMouseLeave={() => setFlyout(false)}
     />
    </ul>
   </nav>
   <div className="">
    <Link
     href="/"
     className="p-2 rounded-xl text-slate-800 bg-white">
     Become a Partner
    </Link>
   </div>
  </header>
 );
};

export default Header;
