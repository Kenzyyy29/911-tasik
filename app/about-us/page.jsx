import Link from "next/link";

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
    <div className="flex flex-col gap-5 h-full text-white bg-black/50  py-[120px] px-[20px] lg:px-[100px] lg:py-[100px]">
     <h1 className="text-4xl font-bold">Tentang Perusahaan 911 Coffee</h1>
     <p className="text-md lg:text-lg">
      911 Coffee Tasikmalaya merupakan cabang dari 911 Coffee yang berpusat di
      Bandung. 911 Coffee Tasikmalaya berdiri pada 12 Desember 2022, pada
      awalnya kami hanya memiliki satu area yang memiliki luas 20 meter persegi.
      Pada 11 November 2023, Kami menambahkan area baru dengan luas 100 meter
      persegi.
     </p>
    </div>
   </section>
   <section className="h-screen w-full flex items-center justify-center  bg-[#f4f4f4]">
    <div className="text-center h-full w-full flex flex-col gap-10 items-center justify-center ">
     <div className="flex flex-col lg:flex-row gap-5 items-center justify-center px-10">
      <div className="lg:h-[400px] lg:w-[400px] h-[400px] w-[330px] bg-white rounded-lg  shadow-xl"></div>
      <div className="max-w-[600px]">
       <h1 className="text-3xl font-bold text-start">
        Ceritakan Pengalaman Berharga anda bersama kami!
       </h1>
      </div>
     </div>
     <Link href="https://www.google.com/search?sca_esv=25082cbaae72e774&rlz=1C1FKPE_idID1132ID1132&sxsrf=AHTn8zqoYvt0MvQ_dsVKSOW5-CXhnQO7tA:1742657955768&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzZ7CcGQU9Rv0dAQtPywYgZUkKHGqM8VCciNdFOAd08kT86I8zKcrMW2x8j3uJ6Q-IkUZzAEQ4wAbk5lDZ_kwu6Zmo1Ys&q=911+Coffee+Ulasan&sa=X&ved=2ahUKEwjXqqzjgp6MAxWj4jgGHUMEASUQ0bkNegQIIhAE&biw=1280&bih=593&dpr=1.5#lrd=0x2e6f5708046d40ab:0xbd1144a5c474882,3,,,,">
      Beri Review!
     </Link>
    </div>
   </section>
   <section className="h-auto py-10 w-full flex flex-col gap-6 items-center justify-center bg-white">
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
  </div>
 );
};

export default About;
