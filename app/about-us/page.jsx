import ReviewCards from "@/components/ui/ReviewCards";
import Link from "next/link";

const menu = [
 {name: "Menu 1", image: "/menus/1.png", description: "ABCD"},
 {name: "Menu 1", image: "/menus/4.png", description: "DBCA"},
 {name: "Menu 1", image: "/menus/6.png", description: "CCBA"},
];

const spot = [
 {
  name: "Tasikmalaya",
  image: "/1.jpeg",
 },
 {
  name: "Tasikmalaya",
  image: "/2.jpeg",
 },
 {
  name: "Tasikmalaya",
  image: "/3.jpeg",
 },
 {
  name: "Tasikmalaya",
  image: "/4.jpeg",
 },
 {
  name: "Tasikmalaya",
  image: "/5.jpeg",
 },
 {
  name: "Tasikmalaya",
  image: "/6.jpeg",
 },
];

const About = () => {
 return (
  <div className="flex flex-col">
   <section
    className="h-screen w-full flex items-center justify-center text-white"
    style={{
     backgroundImage: "url('/5.jpeg')",
     height: "55vh",
     backgroundSize: "cover",
     backgroundPosition: "center",
    }}>
    <div className="h-full text-white bg-black/50 w-full py-[120px] px-[20px] lg:px-[100px] lg:py-[100px]">
     <div className="flex flex-col gap-5 max-w-[750px] pt-5">
      <h1 className="text-5xl font-bold">Tentang 911 Coffee Tasikmalaya</h1>
      <p className="text-md lg:text-lg">
       911 Coffee Tasikmalaya merupakan cabang dari 911 Coffee yang berpusat di
       Bandung. 911 Coffee Tasikmalaya berdiri pada 12 Desember 2022.
      </p>
     </div>
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
      Lihat Semua Produk
     </Link>
    </div>
   </section>

   {/* Spot Section */}
   <section className="h-auto py-10 w-full flex flex-col gap-6 items-center justify-center bg-[#f4f4f4]">
    <h1 className="text-3xl text-black/40 font-bold">Favorite Spot</h1>
    <div className="grid grid-cols-3 gap-5">
     {spot.map((item, index) => (
      <div
       key={index}
       className="shadow-lg h-[250px] w-[350px] rounded-lg "
       style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
       }}>
       <div className="bg-black/40 hover:bg-black/5 transition-all ease-in duration-300 cursor-pointer h-full rounded-lg w-full text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">{item.name}</h1>
       </div>
      </div>
     ))}
    </div>
    <Link
     href="/"
     className="hover:underline">
     See More
    </Link>
   </section>

   {/*Review Section*/}
   <section className="h-auto w-full flex flex-col  justify-center  bg-white p-10">
    <div className="text-center h-full w-full flex flex-col gap-10 items-center justify-center ">
     <div className="flex flex-col lg:flex-row gap-5 items-center justify-center px-10">
      <div className="flex flex-col gap-5 items-start max-w-[690px]">
       <h1 className="text-5xl font-bold text-start">
        Ceritakan Pengalaman Berharga anda bersama kami!
       </h1>
       <p className="text-xl">
        Sudah banyak customer yang memberi kami penilaian baik!
       </p>
       <Link
        href="https://www.google.com/search?sca_esv=25082cbaae72e774&rlz=1C1FKPE_idID1132ID1132&sxsrf=AHTn8zqoYvt0MvQ_dsVKSOW5-CXhnQO7tA:1742657955768&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzZ7CcGQU9Rv0dAQtPywYgZUkKHGqM8VCciNdFOAd08kT86I8zKcrMW2x8j3uJ6Q-IkUZzAEQ4wAbk5lDZ_kwu6Zmo1Ys&q=911+Coffee+Ulasan&sa=X&ved=2ahUKEwjXqqzjgp6MAxWj4jgGHUMEASUQ0bkNegQIIhAE&biw=1280&bih=593&dpr=1.5#lrd=0x2e6f5708046d40ab:0xbd1144a5c474882,3,,,,"
        className="py-3 px-2 bg-black rounded-full text-white w-[150px]">
        Beri Penilaian!
       </Link>
      </div>
      <ReviewCards />
     </div>
    </div>
   </section>
   <section className="h-screen py-10 w-full flex gap-24 items-center justify-center bg-[#f4f4f4]">
    <div className="h-[400px] w-[300px] bg-white shadow-lg rounded-2xl"></div>
    <div className="flex flex-col gap-5 max-w-[500px]">
     <h1 className="text-5xl font-bold">BERGABUNGLAH BERSAMA KAMI</h1>
     <p className="text-lg">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos tempore, ea
      a beatae mollitia placeat enim laudantium. Porro, commodi culpa? Maxime
      aperiam repellendus sequi nemo voluptatem, labore et sit excepturi.
     </p>
     <Link
      href="/career"
      className="py-3 px-2 bg-black text-white rounded-full w-[200px] text-center">
      Cari Lowongan!
     </Link>
    </div>
   </section>
  </div>
 );
};

export default About;
