import Sidebar from "@/components/ui/Sidebar";

const ProductLayout = ({children}) => {
 return (
  <div className="h-screen w-full flex gap-10 pt-[130px] pb-[50px] px-[100px] justify-center text-white bg-black">
   <Sidebar />
   {children}
  </div>
 );
};

export default ProductLayout;
