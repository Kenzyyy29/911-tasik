import ContactForm from "@/components/ui/ContactForm";

const Contact = () => {
 return (
  <div>
   <section
    className="h-screen w-full flex items-center justify-center text-white "
    style={{
     backgroundImage: "url('/2.jpeg')",
     height: "55vh",
     backgroundSize: "cover",
     backgroundPosition: "center",
    }}>
    <div className="text-center bg-black/40 h-full w-full flex flex-col gap-4 items-center justify-center px-10 pt-5">
     <div className="max-w-[800px]">
      <h2 className="text-5xl font-bold">Ada pertanyaan? Hubungi tim kami!</h2>
     </div>
    </div>
   </section>
   <div className="h-screen w-full flex flex-col lg:flex-row items-center justify-between bg-white pt-[130px] pb-[50px] px-10 lg:px-[100px]">
    <div className="flex flex-col gap-7  text-black font-bold max-w-[400px]">
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
  </div>
 );
};

export default Contact;
