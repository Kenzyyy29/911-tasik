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
   <section className="h-screen w-full flex items-center justify-center  bg-[#f4f4f4]"></section>
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
    <Link href="/">See More</Link>
   </section>
  </div>
 );
};

export default About;
