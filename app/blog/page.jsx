import Link from "next/link";
import {IoIosArrowRoundForward} from "react-icons/io";

const Article = [
 {
  title: "Paket Buka Puasa di 911 Coffee Tasikmalaya",
  content:
   "911 Coffee Tasikmalaya menyediakan berbagai paket menarik selama bulan Ramadhan 2025. Berikut list pa...",
  path: "/blog/Paket-buka-puasa-di-911-Coffee-Tasikmalaya",
  image: "/article/1.jpeg",
  posted: "27/03/2025",
 },
];

const Blog = () => {
 return (
  <div
   id="blog"
   className="flex flex-col">
   <section
    className="h-screen w-full flex items-center justify-center text-white "
    style={{
     backgroundImage: "url('/3.jpeg')",
     height: "55vh",
     backgroundSize: "cover",
     backgroundPosition: "center",
    }}>
    <div className="bg-black/60 w-full h-full flex items-center justify-center">
     <div className="flex flex-col gap-5 max-w-[800px] text-center">
      <h1 className="font-bold text-5xl">
       Dapatkan informasi terbaru mengenai 911 Coffee Tasikmalaya
      </h1>
     </div>
    </div>
   </section>
   <section className="h-screen w-full lg:px-[100px]">
    <div className=" p-4">
     <div className="flex justify-center">
      <h1 className="text-4xl font-bold mb-6">Berita Perusahaan</h1>
     </div>
     <div className="flex justify-center lg:justify-start gap-4">
      {Article.map((item, index) => (
       <Link
        href={item.path}
        key={index}
        className="h-auto w-[350px] flex flex-col shadow-lg hover:shadow-2xl border border-gray-300 transition-all ease-in-out duration-500 rounded-lg bg-white cursor-pointer">
        <div
         className="overflow-hidden rounded-t-lg"
         style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
         }}
        />
        <div className="p-5">
         <div className="flex items-center h-[80px]">
          <h2 className="text-2xl font-semibold">{item.title}</h2>
         </div>
         <p className="text-gray-400 mb-4">{item.content}</p>
         <div className="flex flex-col gap-5">
          <button className="cursor-pointer text-start flex items-center text-black">
           Baca Selengkapnya <IoIosArrowRoundForward />
          </button>
          <div className="border-t flex items-center pt-1">
           <p className="text-[14px] text-black/60">{item.posted}</p>
          </div>
         </div>
        </div>
       </Link>
      ))}
     </div>
    </div>
   </section>
  </div>
 );
};

export default Blog;
