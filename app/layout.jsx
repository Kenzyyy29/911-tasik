"use client";
import {useEffect, useState} from "react";;
import Loading from "@/components/ui/Loading";

import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"],
});

export default function RootLayout({children}) {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    const timer = setTimeout(() => {
     setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
   }, []);

 return (
  <html lang="en">
   <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    {loading ? <Loading /> : children}
   </body>
  </html>
 );
}
