import Link from "next/link";

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
     height: "100vh",
     backgroundSize: "cover",
     backgroundPosition: "center",
    }}>
    <div className="text-center bg-black/40 h-full w-full flex flex-col items-center justify-center px-10">
     <h2 className="text-4xl">Welcome to My Next App!</h2>
     <p className="mt-4">
      This is a simple example of a Next.js app with a loading page.
     </p>
    </div>
   </section>

   {/* Menu Section */}
   <section className="h-auto py-10 w-screen lg:w-full flex items-center justify-center">
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
      See More
     </Link>
    </div>
   </section>

   <section className="h-screen w-full flex items-center justify-center  bg-[#f4f4f4]">
    <div className="text-center h-full w-full flex flex-col gap-10 items-center justify-center ">
     <div className="flex flex-col lg:flex-row gap-5 items-center justify-center px-10">
      <div className="max-w-[600px]">
       <h1 className="text-3xl font-bold text-start">
        Ceritakan Pengalaman Berharga anda bersama kami!
       </h1>
      </div>
      <div className="lg:h-[400px] lg:w-[400px] h-[400px] w-[330px] bg-white rounded-lg  shadow-xl"></div>
     </div>
     <Link href="https://www.google.com/search?sca_esv=25082cbaae72e774&rlz=1C1FKPE_idID1132ID1132&sxsrf=AHTn8zqoYvt0MvQ_dsVKSOW5-CXhnQO7tA:1742657955768&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzZ7CcGQU9Rv0dAQtPywYgZUkKHGqM8VCciNdFOAd08kT86I8zKcrMW2x8j3uJ6Q-IkUZzAEQ4wAbk5lDZ_kwu6Zmo1Ys&q=911+Coffee+Ulasan&sa=X&ved=2ahUKEwjXqqzjgp6MAxWj4jgGHUMEASUQ0bkNegQIIhAE&biw=1280&bih=593&dpr=1.5#lrd=0x2e6f5708046d40ab:0xbd1144a5c474882,3,,,,">
      Beri Review!
     </Link>
    </div>
   </section>

   <section className="h-screen w-full flex items-center justify-between  bg-white">
    <div className="text-center h-full w-full flex flex-col gap-10 items-center justify-center ">
     <div className="flex flex-col lg:flex-row gap-14 items-center justify-center px-10">
      <div className="lg:h-[400px] lg:w-[400px] h-[400px] w-[330px] bg-black rounded-lg  shadow-xl"></div>
      <div className="max-w-[600px] flex flex-col gap-4">
       <h1 className="text-3xl font-bold text-start">
        Bergabung bersama kami!
       </h1>
       <Link
        href="https://www.google.com/search?sca_esv=25082cbaae72e774&rlz=1C1FKPE_idID1132ID1132&sxsrf=AHTn8zqoYvt0MvQ_dsVKSOW5-CXhnQO7tA:1742657955768&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzZ7CcGQU9Rv0dAQtPywYgZUkKHGqM8VCciNdFOAd08kT86I8zKcrMW2x8j3uJ6Q-IkUZzAEQ4wAbk5lDZ_kwu6Zmo1Ys&q=911+Coffee+Ulasan&sa=X&ved=2ahUKEwjXqqzjgp6MAxWj4jgGHUMEASUQ0bkNegQIIhAE&biw=1280&bih=593&dpr=1.5#lrd=0x2e6f5708046d40ab:0xbd1144a5c474882,3,,,,"
        className="py-4 px-2 rounded-full bg-black text-white">
        Bergabung
       </Link>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
}
