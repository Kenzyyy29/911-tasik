import ContactForm from "@/components/ui/ContactForm";

const Contact = () => {
 return (
  <div className="h-screen w-full flex flex-col lg:flex-row items-center justify-between bg-gray-700 pt-[130px] pb-[50px] px-10 lg:px-[100px]">
   <div className="text-4xl lg:text-6xl text-white font-bold">
    Halo! Ada yang bisa kami bantu?
   </div>
   <ContactForm />
  </div>
 );
};

export default Contact;
