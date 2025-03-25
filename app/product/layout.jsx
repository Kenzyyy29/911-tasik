import Sidebar from "@/components/ui/Sidebar";

const ProductLayout = ({children}) => {
 return (
  <div className="flex flex-col">
   <section
    className="h-screen w-full flex items-center justify-center text-white "
    style={{
     backgroundImage: "url('/6.jpeg')",
     height: "55vh",
     backgroundSize: "cover",
     backgroundPosition: "center",
    }}>
    <div className="text-center bg-black/40 h-full w-full flex flex-col gap-4 items-center justify-center px-10 pt-5">
     <h2 className="text-4xl font-bold">911 COFFEE TASIKMALAYA</h2>
     <p className="text-lg">GOOD COFFEE START FROM HERE</p>
    </div>
   </section>
   <div className="flex lg:pt-[130px] pb-[50px] px-[10px] lg:px-[90px] bg-[#f4f4f4]">
    <Sidebar />
    {children}
   </div>
  </div>
 );
};

export default ProductLayout;
