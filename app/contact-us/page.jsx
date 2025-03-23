import ContactForm from "@/components/ui/ContactForm";

const Contact = () => {
 return (
  <div className="h-screen w-full flex flex-col lg:flex-row items-center justify-between bg-gray-700 pt-[130px] pb-[50px] px-10 lg:px-[100px]">
   <div className="flex flex-col gap-7  text-white font-bold max-w-[400px]">
    <h1 className="text-4xl lg:text-5xl">
     Mau mengobrol langsung dengan tim kami?
    </h1>
    <p className="text-base font-normal">
     Tanya di sini saja. Tim kami akan menjawab pertanyaan Anda paling lama 24
     jam.
    </p>
    <p className="text-base font-normal">
     Kami senang membantu Anda di jam-jam layanan berikut ini: Senin - Minggu 9
     Pagi - 9 Malam Telepon kami atau tinggalkan pertanyaan di formulir.
    </p>
    <p className="text-base font-normal">
     Kami akan merespons Anda dalam 1 hari kerja. 1500970 support@mokapos.com
    </p>
   </div>
   <ContactForm />
  </div>
 );
};

export default Contact;
