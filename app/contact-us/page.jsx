import ContactForm from "@/components/ui/ContactForm";

const Contact = () => {
 return (
  <div className="h-screen w-full flex items-center justify-between bg-gray-700 pt-[130px] pb-[50px] px-[100px]">
   <div className="text-6xl text-white font-bold">
    Halo! Ada yang bisa kami bantu?
   </div>
   <ContactForm />
  </div>
 );
};

export default Contact;
