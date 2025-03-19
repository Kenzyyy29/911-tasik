"use client";
import {useEffect, useState} from "react";
import Loading from "@/components/ui/Loading";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";


export default function RootLayout({children}) {
   const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Waktu yang sama dengan durasi fade out
    }, 1000); // Simulasi loading selama 2 detik

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? (
          <Loading fadeOut={fadeOut} />
        ) : (
           <div className={`fade-out ${fadeOut ? '' : 'opacity-100'}`}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        )}
      </body>
    </html>
   );
}
