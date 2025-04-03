import SearchBox from "@/components/ui/SearchBox";

const Career = () => {
 return (
  <div className="flex flex-col">
   <section
    className="h-screen w-full flex items-center justify-center text-white"
    style={{
     backgroundImage: "url('/4.jpeg')",
     height: "55vh",
     backgroundSize: "cover",
     backgroundPosition: "center",
    }}>
    <div className="bg-black/60 w-full h-full flex items-center justify-center px-10">
     <div className="flex flex-col gap-5 max-w-[600px] text-center">
      <h1 className="font-bold text-5xl">
       Bergabung bersama kami, dan dapatkan kesempatan karir yang menarik.
      </h1>
     </div>
    </div>
   </section>
   <section className="min-h-screen lg:h-screen  bg-white text-black">
    <SearchBox />
   </section>
  </div>
 );
};

export default Career;
