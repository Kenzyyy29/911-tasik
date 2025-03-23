const ContactForm = () => {
 return (
  <div className=" w-full max-w-sm flex flex-col gap-4 rounded-lg">
   <form className="flex flex-col w-full">
    <div className="p-2 border border-white text-white rounded-lg bg-gray-500">
     <input
      type="text"
      placeholder="Name"
      className="focus:outline-none w-full"
     />
    </div>
   </form>
   <form className="flex flex-col w-full">
    <div className="p-2 border border-white text-white rounded-lg bg-gray-500">
     <input
      type="email"
      placeholder="Email"
      className="focus:outline-none w-full"
     />
    </div>
   </form>
   <form className="flex flex-col w-full">
    <div className="p-2 border border-white text-white rounded-lg bg-gray-500">
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
     className="shadow appearance-none border border-white text-white rounded w-full py-2 px-3 h-[150px] xl:h-[150px] 2xl:h-[180px]  text-tulang leading-tight focus:outline-none focus:shadow-outline bg-gray-500"
     required
    />
   </form>
   <div className="flex justify-between items-center">
    <h1
     className="text-4xl text-white font-bold"
     style={{fontFamily: "Agency FB"}}>
     9/1/1
    </h1>
    <button className="bg-white py-2 px-1 font-semibold rounded-lg text-gray-800 w-[100px]">
     Send
    </button>
   </div>
  </div>
 );
};

export default ContactForm;
