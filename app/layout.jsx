"use client";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import Loading from "@/components/ui/Loading";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const disableFooter = [
 "/product",
 "/product/foods",
 "/product/beverages",
 "/product/package",
 "/contact-us"
];

export default function RootLayout({children}) {
 const pathname = usePathname();
 const [loading, setLoading] = useState(true);
 const [fadeOut, setFadeOut] = useState(false);

 useEffect(() => {
  const timer = setTimeout(() => {
   setFadeOut(true);
   setTimeout(() => {
    setLoading(false);
   }, 100); 
  }, 100); 

  return () => clearTimeout(timer);
 }, []);

 return (
  <html lang="en">
   <head>
    <title>911 Coffee Tasikmalaya</title>
    <meta
     name="description"
     content="Good Coffee Start From Here"
    />
    <meta
     name="viewport"
     content="width=device-width, initial-scale=1"
    />
    <link
     rel="icon"
     href="/favicon.ico"
    />
   </head>
   <body>
    {loading ? (
     <Loading fadeOut={fadeOut} />
    ) : (
     <div className={`fade-out ${fadeOut ? "" : "opacity-100"}`}>
      <Header />
      <main>{children}</main>
      {!disableFooter.includes(pathname) && <Footer />}
     </div>
    )}
   </body>
  </html>
 );
}
