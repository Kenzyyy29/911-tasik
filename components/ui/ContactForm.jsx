const ContactForm = () => {
 return (
  <div className=" w-full max-w-sm flex flex-col gap-4 rounded-lg">
   <form className="flex flex-col w-full">
    <div className="p-2 border border-gray-400 text-gray-400  rounded-lg bg-white">
     <input
      type="text"
      placeholder="Name"
      className="focus:outline-none w-full"
     />
    </div>
   </form>
   <form className="flex flex-col w-full">
    <div className="p-2 border border-gray-400 text-gray-400  rounded-lg bg-white">
     <input
      type="email"
      placeholder="Email"
      className="focus:outline-none w-full"
     />
    </div>
   </form>
   <form className="flex flex-col w-full">
    <div className="p-2 border border-gray-400 text-gray-400  rounded-lg bg-white">
     <input
      type="text"
      placeholder="Phone Number "
      className="focus:outline-none w-full"
     />
    </div>
   </form>
   <form action="">
    <textarea
     name="message"
     placeholder="Message"
     className="shadow appearance-none border border-gray-400 text-gray-400  rounded-lg bg-white w-full py-2 px-3 h-[150px] xl:h-[150px] 2xl:h-[180px]  text-tulang leading-tight focus:outline-none focus:shadow-outline"
     required
    />
   </form>
   <div className="flex justify-end items-center">
    <button className="bg-black py-2 px-1 font-semibold rounded-lg text-white w-[100px]">
     Send
    </button>
   </div>
  </div>
 );
};

export default ContactForm;
