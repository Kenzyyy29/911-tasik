const ContactForm = () => {
 return (
  <div className="bg-white backdrop-blur-lg w-full max-w-sm flex flex-col gap-4 px-5 pt-6 pb-8 rounded-lg">
   <form className="flex flex-col w-full">
    <div className="p-2 border rounded-lg bg-white">
     <input
      type="text"
      placeholder="Name"
      className="focus:outline-none w-full"
     />
    </div>
   </form>
   <form className="flex flex-col w-full">
    <div className="p-2 border rounded-lg bg-white">
     <input
      type="email"
      placeholder="Email"
      className="focus:outline-none w-full"
     />
    </div>
   </form>
   <form className="flex flex-col w-full">
    <div className="p-2 border rounded-lg bg-white">
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
     className="shadow appearance-none border rounded w-full py-2 px-3 xl:h-[150px] 2xl:h-[180px]  text-tulang leading-tight focus:outline-none focus:shadow-outline bg-white"
     required
    />
   </form>
   <div className="flex justify-between items-center">
    <h1
     className="text-4xl text-black font-bold"
     style={{fontFamily: "Agency FB"}}>
     9/1/1
    </h1>
    <button className="bg-gray-700 py-3 px-2 rounded-lg text-white w-[100px]">
     Send
    </button>
   </div>
  </div>
 );
};

export default ContactForm;
