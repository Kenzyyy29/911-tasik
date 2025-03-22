import Sidebar from "@/components/ui/Sidebar";

const ProductLayout = ({children}) => {
 return (
  <div className="h-screen w-full flex flex-col lg:flex-row gap-10 pt-[100px] lg:pt-[130px] pb-[50px] px-[10px] lg:px-[90px] justify-center items-center lg:items-start text-white bg-black">
   <Sidebar />
   {children}
  </div>
 );
};

export default ProductLayout;
