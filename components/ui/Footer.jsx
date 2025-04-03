import Link from "next/link";
import {FaInstagram, FaTiktok, FaWhatsapp} from "react-icons/fa";

const SocialLinks = [
 {
  name: "Instagram",
  icon: <FaInstagram />,
  path: "https://www.instagram.com/9.1.1coffee/",
 },
 {
  name: "Facebook",
  icon: <FaTiktok />,
  path: "https://www.facebook.com/9.1.1coffee/",
 },
 {
  name: "Twitter",
  icon: <FaWhatsapp />,
  path: "https://twitter.com/9.1.1coffee",
 },
];

const Links = {
 name: "COMPANY PROFILE",
 items: [
  {name: "Tentang Kami", path: "/about-us"},
  {name: "Menu", path: "/product"},
  {name: "Berita", path: "/blog"},
 ],
};

const Links2 = {
 name: "OTHERS",
 items: [
  {name: "Kontak", path: "/contact-us"},
  {name: "Karir", path: "/career"},
 ],
};

const Footer = () => {
 return (
  <div className="flex flex-col gap-8 items-center text-center lg:text-start justify-center lg:justify-between h-auto bg-black py-10 px-[10px] lg:px-40">
   <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full gap-10">
    <div className="flex flex-col lg:flex-row gap-10 h-full">
     <div className="flex flex-col text-end max-w-[175px]">
      <h1
       className="text-8xl text-white w-full"
       style={{fontFamily: "Agency FB"}}>
       9/1/1
      </h1>
      <hr className="w-full bg-white border-2 border-white" />
      <p className="text-white font-semibold text-[10px]">
       Coffee, Eatery, and Space.
      </p>
     </div>
     <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
       <h1 className="text-xl font-bold text-gray-400">OUR ADDRESS</h1>
       <p className="text-white  w-[200px]">
        Jl. Kapten Naseh No.7 Cipedes, Kota Tasikmalaya.
       </p>
      </div>
      <div className="flex flex-col gap-3">
       <h1 className="text-xl font-bold text-gray-400">SOCIAL MEDIA</h1>
       <div className="flex gap-2">
        {SocialLinks.map((item, index) => (
         <a
          href={item.path}
          key={index}
          className="flex items-center justify-center w-14 h-14 bg-white rounded-full text-2xl">
          {item.icon}
         </a>
        ))}
       </div>
      </div>
     </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-10 text-white h-full">
     <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold text-gray-400">{Links.name}</h1>
      <div className="flex flex-col gap-3">
       {Links.items.map((item, index) => (
        <Link
         key={index}
         href={item.path}>
         {item.name}
        </Link>
       ))}
      </div>
     </div>
     <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold text-gray-400">{Links2.name}</h1>
      <div className="flex flex-col gap-3">
       {Links2.items.map((item, index) => (
        <Link
         key={index}
         href={item.path}>
         {item.name}
        </Link>
       ))}
      </div>
     </div>
    </div>
   </div>
   <hr className="w-full border border-white" />
   <p className="text-gray-400">@ 2016 911 Coffee. All Rights Reserved</p>
  </div>
 );
};

export default Footer;
