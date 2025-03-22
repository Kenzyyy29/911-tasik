const pang = {
 name: "Coffee",
 description: "(8 AM - 10 AM)",
 items: [
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
  {name: "Hot Latte", image: "/menus/1.png", description: "abcd"},
 ],
};

const maksi = {
 name: "MAKSI",
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
 name: "NGOPSOR",
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

const BeveragesPage = () => {
 return (
  <div className="flex flex-col gap-10 overflow-x-auto lg:overflow-y-auto w-full max-h-[300px] lg:max-h-[450px] px-5">
   <div className="flex flex-col gap-4 ">
    <h1 className="text-gray-400 text-2xl font-bold">{pang.name}</h1>
    <p>{pang.description}</p>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
     {pang.items.map((item, index) => (
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

   {/*MAKSI*/}
   <div className="flex flex-col gap-4 ">
    <h1 className="text-gray-400 text-2xl font-bold">{maksi.name}</h1>
    <p>{maksi.description}</p>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
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

export default BeveragesPage;
