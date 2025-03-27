const BlogForm = () => {
 return (
  <div id="form" className="flex flex-col gap-4 pt-4">
   <h1 className="text-3xl font-bold">Tinggalkan Balasan</h1>
   <p className="text-gray-400">
    Alamat email Anda tidak akan dipublikasikan. Ruas yang wajib ditandai *
   </p>
   <form className="w-full flex flex-col gap-6">
    <textarea
     name=""
     placeholder="Komentar*"
     id=""
     className="h-[250px] border w-full p-2 focus:outline-none"></textarea>
    <input
     type="text"
     placeholder="Nama*"
     className="p-2 w-full border focus:outline-none"
    />
    <input
     type="email"
     placeholder="Email*"
     className="p-2 w-full border focus:outline-none"
    />
    <div className="flex gap-3 items-center">
     <input
      type="checkbox"
      name="checkbox"
      id=""
     />
     <p>Saya menyetujui untuk mengirimkan Data.</p>
    </div>
    <button className="rounded py-3 px-2 bg-black text-white w-[150px]">
     Kirim Komentar
    </button>
   </form>
  </div>
 );
};

export default BlogForm;
