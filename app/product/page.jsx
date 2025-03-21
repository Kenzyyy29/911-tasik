const pang = {
 name: "Pang!",
 description: "(8 AM - 10 AM)",
 items: [
  {name: "Hot Latte", image: "/menus/1.png", description: "Rp. 10,000"},
  {name: "Hot Cappucino", image: "/menus/2.png", description: "Rp. 10,000"},
  {name: "Hot Americano", image: "/menus/3.png", description: "Rp. 10,000"},
  {name: "Nasi Pecel Telur", image: "/menus/4.png", description: "Rp. 15,000"},
  {name: "Dimsum Mix", image: "/menus/5.png", description: "Rp. 15,000"},
  {name: "White Toast", image: "/menus/6.png", description: "Rp. 15,000"},
  {name: "Risoles", image: "/menus/7.png", description: "Rp. 15,000"},
 ],
};

const maksi = {
 name: "Maksi",
 description: "(10 AM - 3 PM)",
 items: [
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
 ],
};

const ngopsor = {
 name: "Ngopsor",
 description: "(3 PM - 6 PM)",
 items: [
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
 ],
};

const ProductPage = () => {
 return (
  <div className="flex flex-col gap-10 overflow-y-auto w-full h-auto px-5">
   <div className="flex flex-col gap-4 ">
    <h1 className="text-gray-400 text-3xl font-bold">{pang.name}</h1>
    <p>{pang.description}</p>
    <div className="grid grid-cols-3 gap-6 w-full">
     {pang.items.map((item, index) => (
      <div
       key={index}
       className="flex flex-col gap-6 items-center justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg ">
       <img
        src={item.image}
        alt=""
        className="w-[120px]"
       />
       <h2 className="text-xl font-semibold mt-2 text-black">{item.name}</h2>
       <p className="text-gray-600 text-lg">{item.description}</p>
      </div>
     ))}
    </div>
   </div>

   {/*MAKSI*/}
   <div className="flex flex-col gap-4 ">
    <h1 className="text-gray-400 text-2xl font-bold">{maksi.name}</h1>
    <p>{maksi.description}</p>
    <div className="grid grid-cols-3 gap-6 w-full">
     {maksi.items.map((item, index) => (
      <div
       key={index}
       className="flex flex-col gap-6 items-center justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg ">
       <img
        src={item.image}
        alt=""
        className="w-[120px]"
       />
       <h2 className="text-lg font-semibold mt-2 text-black">{item.name}</h2>
       <p className="text-gray-600">{item.description}</p>
      </div>
     ))}
    </div>
   </div>

   {/*NGOPSOR*/}
   <div className="flex flex-col gap-4 ">
    <h1 className="text-gray-400 text-2xl font-bold">{ngopsor.name}</h1>
    <p>{ngopsor.description}</p>
    <div className="grid grid-cols-3 gap-6 w-full">
     {ngopsor.items.map((item, index) => (
      <div
       key={index}
       className="flex flex-col gap-6 items-center justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg ">
       <img
        src={item.image}
        alt=""
        className="w-[120px]"
       />
       <h2 className="text-lg font-semibold mt-2 text-black">{item.name}</h2>
       <p className="text-gray-600">{item.description}</p>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};

export default ProductPage;
