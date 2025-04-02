import BlogForm from "@/components/ui/BlogForm";
import Link from "next/link";
const Article1 = () => {
 return (
  <div className="min-h-screen flex flex-col justify-center ">
   <section
    style={{
     backgroundImage: "url('/article/1.jpeg')",
     backgroundSize: "cover",
     backgroundPosition: "center",
     height: "55vh",
    }}>
    <div className="w-full bg-black/60 h-full flex items-center justify-center">
     <h1 className="font-bold text-5xl text-white">
      Paket Buka Puasa di 911 Coffee Tasikmalaya
     </h1>
    </div>
   </section>
   <div className="py-10 px-[100px] flex flex-col gap-3">
    <h2 className="text-2xl font-semibold text-black">
     Paket Buka Puasa di 911 Coffee Tasikmalaya
    </h2>
    <div className="w-[350px]"></div>
    <article className="text-black flex flex-col gap-4">
     <p className="">
      911 Coffee Tasikmalaya menyediakan berbagai paket menarik selama bulan
      Ramadhan 2025. Berikut list paket bukber di 911 Coffee Tasikmalaya :{" "}
      <br />- Paket A (Ayam Goreng, Nasi, Sweet Tea + Takjil), Harga :
      Rp.35,000,- <br />- Paket B (Ayam Bakar, Nasi, Sweet Tea + Takjil), Harga
      : Rp.35,000,- <br />- Paket C (911 Fried Rice, Nasi, Sweet Tea + Takjil),
      Harga : Rp.35,000,- <br />- Paket D (Butter Rice with Barbeque Chicken,
      Nasi, Sweet Tea + Takjil), Harga : Rp.35,000,- <br />- Paket E (Fried
      Chicken Pecel, Nasi, Sweet Tea + Takjil), Harga : Rp.35,000,- <br />-
      Paket F (Fried Catfish Pecel, Nasi, Sweet Tea + Takjil), Harga :
      Rp.35,000,- <br />- Paket G (Soto Ayam 911, Nasi, Sweet Tea + Takjil),
      Harga : Rp.35,000,- <br />- Paket H (Tomyum Seafood, Nasi, Sweet Tea +
      Takjil), Harga : Rp.35,000,- <br />
     </p>
     <p>
      Untuk Reservasi bisa menghubungi kontak dibawah ini : <br />
      Whatsapp :{" "}
      <span className="text-blue-400">
       <Link href="https://wa.me/+628112230911">0811-2230-911</Link>
      </span>{" "}
      <br /> Instagram :{" "}
      <span className="text-blue-400">
       <Link href="https://www.instagram.com/911coffee.tasik/?hl=id">
        @911coffee.tasik
       </Link>
      </span>
     </p>
    </article>
   </div>
  </div>
 );
};

export default Article1;
