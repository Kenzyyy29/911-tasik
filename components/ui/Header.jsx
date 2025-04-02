"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

// icons
import {IoIosArrowDown, IoIosClose} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";

const MobileLinks = [
 {
  name: "About Us",
  path: "/about-us",
 },
 {
  name: "Product",
  path: "/product",
 },
 {
  name: "Franchise",
  path: "/",
 },
];

const MoreLink = [
 {
  name: "Contact Us",
  path: "/contact-us",
 },
 {
  name: "FAQ",
  path: "/",
 },
 {name: "Career", path: "/career"},
];

const Dropdown = ({isVisible, onClose}) => {
 if (!isVisible) return null;
 return (
  <div className="flex flex-col gap-5 p-3 text-lg font-medium border-b border-t">
   {MoreLink.map((item, index) => (
    <Link
     onClick={onClose}
     href={item.path}
     key={index}>
     {item.name}
    </Link>
   ))}
  </div>
 );
};

const Popup = ({isVisible, onCLose}) => {
 const [dropdown, setDropdown] = useState(false);

 const toggleDropdown = () => {
  setDropdown(!dropdown);
 };

 if (!isVisible) return null;

 return (
  <div className="fixed inset-0 h-full bg-black/70 flex items-center justify-end">
   <div className="w-[350px] h-full bg-white flex flex-col p-6 justify-between">
    <div className="flex flex-col">
     {/*Header*/}
     <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
       <Link
        onClick={onCLose}
        href="/"
        className="text-5xl"
        style={{fontFamily: "Agency FB"}}>
        9/1/1
       </Link>
       <button onClick={onCLose}>
        <IoIosClose className="text-5xl" />
       </button>
      </div>
      <hr className="w-full border border-black" />
      {/* Body*/}
      <div className="flex flex-col gap-5 text-xl font-normal">
       {MobileLinks.map((item, index) => (
        <Link
         href={item.path}
         key={index}
         onClick={onCLose}>
         {item.name}
        </Link>
       ))}
       <button
        onClick={toggleDropdown}
        className="flex justify-between items-center">
        More
        <IoIosArrowDown />
       </button>
       {dropdown && (
        <Dropdown
         isVisible={dropdown}
         onClick={onCLose}
        />
       )}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

const MobileNav = () => {
 const [popup, setPopup] = useState(false);

 const toggleOpen = () => {
  setPopup(!popup);
 };

 const toggleClose = () => {
  setPopup(false);
 };

 return (
  <div className="">
   <button
    onClick={toggleOpen}
    className="text-3xl text-white">
    <CiMenuFries />
   </button>
   {popup && (
    <Popup
     isVisible={popup}
     onCLose={toggleClose}
    />
   )}
  </div>
 );
};

const Header = () => {
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
   className={`fixed z-10 top-0 lg:px-[100px] w-full justify-between flex items-center left-0 transition-all duration-700 ${
    header ? "bg-black shadow-lg px-6 py-6" : "px-6 py-8 bg-transparent"
   }`}>
   <Link
    href="/"
    className={`logo text-4xl ${header ? "text-white" : "text-white"}`}
    style={{fontFamily: "Agency FB"}}>
    9/1/1
   </Link>
   <nav className="flex gap-10">
    <ul
     className={`hidden lg:flex items-center gap-6 transition-all duration-500 font-semibold  ${
      header ? ` text-white` : ` text-white`
     }`}>
     <Link href="/about-us">Tentang Kami</Link>
     <Link href="/product">Menu</Link>
     <Link href="/blog">Berita</Link>
     <Link href="/contact-us">Kontak</Link>
     <Link href="/career">Karir</Link>
    </ul>
   </nav>
   <div className="flex lg:hidden">
    <MobileNav />
   </div>
  </header>
 );
};

export default Header;
