"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import {Pagination} from "swiper/modules";

import {Tabs, TabsList, TabsTrigger, TabsContent} from "./ui/tabs";

const pang = {
 title: "Pang!",
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
 title: "Maksi",
 description: "(10 AM - 3 PM) + Free Sweet Tea",
 items: [
  {
   name: "Ayam Goreng/Bakar",
   image: "/menus/24.png",
   description: "Rp. 25,000",
  },
  {name: "911 Fried Rice", image: "/menus/32.png", description: "Rp. 25,000"},
  {
   name: "Spaghetti Bolognese",
   image: "/menus/1.png",
   description: "Rp. 25,000",
  },
  {name: "Ricebowl Variant", image: "/menus/26.png", description: "Rp. 25,000"},
 ],
};

const ngopsor = {
 title: "Ngopsor",
 description: "(3 PM - 6 PM) + Hot Coffee (Americano/Latte/Cappuccino)",
 items: [
  {name: "French Fries", image: "/menus/1.png", description: "Rp. 25,000"},
  {name: "Mendoan", image: "/menus/1.png", description: "Rp. 25,000"},
  {name: "Bala Bala", image: "/menus/1.png", description: "Rp. 25,000"},
  {name: "Cireng Rujak", image: "/menus/1.png", description: "Rp. 25,000"},
 ],
};

const coffee = {
 title: "Coffee",
 items: [
  {name: "Espresso", image: "/menus/1.png", description: "Rp. 18,480"},
  {name: "Americano", image: "/menus/1.png", description: "Rp. 20,790"},
  {name: "Tubruk", image: "/menus/1.png", description: "Rp. 20,790"},
  {name: "Es Kopi Susu", image: "/menus/9.png", description: "Rp. 22,000"},
  {name: "Vietnam Drip", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Cappuccino", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Latte", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Picollo", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Magic", image: "/menus/1.png", description: "Rp. 23,100"},

  {name: "Es Kopi Susu Moon", image: "/menus/1.png", description: "Rp. 25,410"},
  {name: "Latte Flavour", image: "/menus/1.png", description: "Rp. 25,410"},
  {name: "Coffee Lemon", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Rose Latte", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Mochaccino", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Caramel Machiato", image: "/menus/1.png", description: "Rp. 26,565"},
  {
   name: "Orange Black Honey",
   image: "/menus/1.png",
   description: "Rp. 26,565",
  },
  {name: "Affogato", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Butter Coffee", image: "/menus/8.png", description: "Rp. 32,340"},
  {name: "V60", image: "/menus/1.png", description: "Rp. 34,650"},
  {name: "Japanese", image: "/menus/1.png", description: "Rp. 34,650"},
 ],
};

const milk = {
 title: "Milk Based",
 items: [
  {name: "Milk Flavour", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Chocolate", image: "/menus/1.png", description: "Rp. 24,255"},
  {name: "Black Pink", image: "/menus/1.png", description: "Rp. 25,410"},
  {name: "Taro Latte", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Rio-Rio Blend", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Red Velvet", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Matcha Latte", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Choco Flavour", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Marie Regal Blend", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Black Charcoal", image: "/menus/1.png", description: "Rp. 26,565"},
  {name: "Red Velvet Cheese", image: "/menus/1.png", description: "Rp. 28,875"},
  {name: "Matcha Cheese", image: "/menus/1.png", description: "Rp. 28,875"},
  {
   name: "Milk Flavour Chesse",
   image: "/menus/1.png",
   description: "Rp. 28,875",
  },
 ],
};

const yakult = {
 title: "Yakult Based",
 items: [
  {name: "Yakult Lychee", image: "/menus/1.png", description: "Rp. 25,410"},
  {name: "Yakult Strawberry", image: "/menus/1.png", description: "Rp. 25,410"},
  {name: "Yakult Lemon", image: "/menus/1.png", description: "Rp. 25,410"},
  {name: "Yakult Blue", image: "/menus/1.png", description: "Rp. 25,410"},
  {name: "Yakult Mango", image: "/menus/1.png", description: "Rp. 25,410"},
 ],
};

const tea = {
 title: "Tea Based",
 items: [
  {name: "Sweet Tea", image: "/menus/30.png", description: "Rp. 11,550"},
  {name: "Lychee Tea", image: "/menus/1.png", description: "Rp. 20,790"},
  {name: "Strawberry Tea", image: "/menus/1.png", description: "Rp. 20,790"},
  {name: "Lemon Tea", image: "/menus/1.png", description: "Rp. 20,790"},
  {name: "Thai Tea", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Ameer Tea", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Grape Tea", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Grenadine Tea", image: "/menus/11.png", description: "Rp. 23,100"},
 ],
};

const mocktail = {
 title: "Selected Mocktail",
 items: [
  {name: "Mango Mocktail", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Da Daw Mocktail", image: "/menus/10.png", description: "Rp. 23,100"},
  {name: "Ice Lychee Coffee", image: "/menus/1.png", description: "Rp. 26,565"},
  {
   name: "Ice Strawberry Coffee",
   image: "/menus/1.png",
   description: "Rp. 26,565",
  },

  {name: "Green Canyon", image: "/menus/12.png", description: "Rp. 32,340"},
 ],
};

const mojito = {
 title: "Fresh Mojito",
 items: [
  {name: "Strawberry Mojito", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Lemon Mojito", image: "/menus/1.png", description: "Rp. 23,100"},
  {name: "Lychee Mojito", image: "/menus/1.png", description: "Rp. 23,100"},
 ],
};

const others = {
 title: "Others",
 items: [
  {name: "Mineral Water", image: "/menus/34.png", description: "Rp. 9,240"},
  {name: "Coffee Beer", image: "/menus/1.png", description: "Rp. 28,875"},
 ],
};

const sweet = {
 title: "Sweet Deserts",
 items: [
  {
   name: "Honey Butter Toast",
   image: "/menus/13.png",
   description: "Rp.23,100",
  },
  {
   name: "Sweet Banana Ice Cream",
   image: "/menus/14.png",
   description: "Rp. 17,325",
  },
 ],
};

const pecel = {
 title: "Pecel Menu",
 items: [
  {name: "Crispy Egg Pecel", image: "/menus/4.png", description: "Rp. 17,325"},
  {
   name: "Fried Catfish Pecel",
   image: "/menus/17.png",
   description: "Rp. 23,100",
  },
  {
   name: "Fried Chicken Pecel",
   image: "/menus/16.png",
   description: "Rp. 28,875",
  },
  {
   name: "Saikoro Meat Pecel",
   image: "/menus/15.png",
   description: "Rp. 34,650",
  },
 ],
};

const lunch = {
 title: "Lunch Time",
 items: [
  {name: "Chicken Burger", image: "/menus/19.png", description: "Rp. 40,425"},
  {name: "Tomyum Seafood", image: "/menus/22.png", description: "Rp. 40,425"},
  {name: "Club Sandwich", image: "/menus/1.png", description: "Rp. 40,425"},
  {name: "Fish n Chip", image: "/menus/21.png", description: "Rp. 43,890"},
  {
   name: "Chicken Parmigiana",
   image: "/menus/23.png",
   description: "Rp. 46,200",
  },
  {name: "Super Breakfast", image: "/menus/20.png", description: "Rp. 46,200"},
  {name: "Beef Burger", image: "/menus/18.png", description: "Rp. 55,440"},
 ],
};

const main = {
 title: "Main Course",
 items: [
  {name: "Soto Ayam 911", image: "/menus/25.png", description: "Rp. 28,875"},
  {name: "Ayam Geprek 911", image: "/menus/1.png", description: "Rp. 32,340"},
  {
   name: "Ayam Goreng Sambal Matah",
   image: "/menus/24.png",
   description: "Rp. 34,650",
  },
  {name: "Ayam Bakar Madu", image: "/menus/29.png", description: "Rp. 34,650"},
  {
   name: "Ayam Rica-Rica",
   image: "/menus/1.png",
   description: "Rp. 34,650",
  },
  {name: "Fried Rice 911", image: "/menus/32.png", description: "Rp. 34,650"},
 ],
};

const ricebowl = {
 title: "Ricebowl Series",
 items: [
  {
   name: "Fried Chicken Ricebowl",
   image: "/menus/26.png",
   description: "Rp. 28,875",
  },
  {
   name: "Blackpapper Chicken Ricebowl",
   image: "/menus/26.png",
   description: "Rp. 28,875",
  },
  {
   name: "Chicken Matah Ricebowl",
   image: "/menus/26.png",
   description: "Rp. 28,875",
  },
  {
   name: "Barbeque Chicken Ricebowl",
   image: "/menus/26.png",
   description: "Rp. 28,875",
  },
  {
   name: "Honey Sesame Chicken Ricebowl",
   image: "/menus/26.png",
   description: "Rp. 28,875",
  },
  {
   name: "Butter Rice with Barabeque Chicken",
   image: "/menus/31.png",
   description: "Rp. 36,960",
  },
 ],
};

const steak = {
 title: "Some Steak?",
 items: [
  {
   name: "Chicken Steak",
   image: "/menus/28.png",
   description: "Rp. 51,975",
  },
  {
   name: "Sirloin Steak",
   image: "/menus/33.png",
   description: "Rp. 78,540",
  },
  {
   name: "Korova Mushroom",
   image: "/menus/27.png",
   description: "Rp. 78,540",
  },
 ],
};

const pasta = {
 title: "Pasta Times",
 items: [
  {
   name: "Shrimp Aglio E Olio",
   image: "/menus/1.png",
   description: "Rp. 36,960",
  },
  {
   name: "Spaghetti Bolognese",
   image: "/menus/1.png",
   description: "Rp. 40,425",
  },
  {
   name: "Creamy Beef Carbonara",
   image: "/menus/1.png",
   description: "Rp. 40,425",
  },

  {
   name: "Mac n Cheese",
   image: "/menus/1.png",
   description: "Rp. 40,425",
  },
 ],
};

const pizza = {
 title: "The Only Triangle I Love",
 items: [
  {
   name: "Marc Marquez Pizza",
   image: "/menus/1.png",
   description: "Rp. 43,890",
  },
  {
   name: "Dovisiozo Pizza",
   image: "/menus/1.png",
   description: "Rp. 43,890",
  },
  {
   name: "Valentino Rossi Pizza",
   image: "/menus/1.png",
   description: "Rp. 43,890",
  },

  {
   name: "Maverick Vinales Pizza",
   image: "/menus/1.png",
   description: "Rp. 43,890",
  },
 ],
};

const dimsum = {
 title: "Dimsum",
 items: [
  {
   name: "Lumpia Ayam",
   image: "/menus/1.png",
   description: "Rp. 19,635",
  },
  {
   name: "Shumai Udang",
   image: "/menus/1.png",
   description: "Rp. 19,635",
  },
  {
   name: "Shumai Nori",
   image: "/menus/1.png",
   description: "Rp. 19,635",
  },

  {
   name: "Ekado",
   image: "/menus/1.png",
   description: "Rp. 19,635",
  },
  {
   name: "Kwotie",
   image: "/menus/1.png",
   description: "Rp. 19,635",
  },
  {
   name: "Mix",
   image: "/menus/1.png",
   description: "Rp. 19,635",
  },
 ],
};

const light = {
 title: "Light Bites Time!",
 items: [
  {
   name: "Tahu Lada Garam",
   image: "/menus/1.png",
   description: "Rp. 19,635",
  },
  {
   name: "Pisang Goreng / Bakar",
   image: "/menus/1.png",
   description: "Rp. 19,635",
  },
  {
   name: "Tempe Mendoan",
   image: "/menus/1.png",
   description: "Rp. 20,790",
  },

  {
   name: "Bala Bala",
   image: "/menus/1.png",
   description: "Rp. 20,790",
  },
  {
   name: "French Fries",
   image: "/menus/1.png",
   description: "Rp. 20,790",
  },
  {
   name: "Cireng Rujak",
   image: "/menus/1.png",
   description: "Rp. 23,100",
  },

  {
   name: "Cireng Cadas",
   image: "/menus/1.png",
   description: "Rp. 23,100",
  },
  {
   name: "Risoles",
   image: "/menus/1.png",
   description: "Rp. 23,100",
  },

  {
   name: "Crispy Mushroom",
   image: "/menus/1.png",
   description: "Rp. 25,410",
  },

  {
   name: "Popcorn Chicken",
   image: "/menus/1.png",
   description: "Rp. 28,875",
  },

  {
   name: "Omelette and Fries",
   image: "/menus/1.png",
   description: "Rp. 28,875",
  },

  {
   name: "French Fries & Sausage",
   image: "/menus/1.png",
   description: "Rp. 28,875",
  },

  {
   name: "Ayam Lada Garam",
   image: "/menus/1.png",
   description: "Rp. 28,875",
  },

  {
   name: "Barbeque Chicken Wings",
   image: "/menus/1.png",
   description: "Rp. 32,340",
  },
 ],
};

const MobileProduct = () => {
 return (
  <section className="flex flex-col lg:hidden">
   <div className="flex flex-col gap-5 px-10 w-full min-h-screen pb-10">
    <Tabs
     defaultValue="promo"
     className="flex flex-col gap-[30px] w-full">
     <TabsList className="flex items-center justify-center w-full px-10 lg:px-0 gap-2 lg:gap-6 pt-[20px]">
      <TabsTrigger value="promo">Promo</TabsTrigger>
      <TabsTrigger value="beverages">Beverages</TabsTrigger>
      <TabsTrigger value="foods">Foods</TabsTrigger>
     </TabsList>

     {/*PANG*/}
     <TabsContent
      value="promo"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{pang.title}</h1>
       <p className="">{pang.description}</p>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {pang.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*maksi*/}
     <TabsContent
      value="promo"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{maksi.title}</h1>
       <p className="">{maksi.description}</p>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {maksi.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*ngopsor*/}
     <TabsContent
      value="promo"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{ngopsor.title}</h1>
       <p className="">{ngopsor.description}</p>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {ngopsor.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*coffee*/}
     <TabsContent
      value="beverages"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{coffee.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {coffee.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*milk*/}
     <TabsContent
      value="beverages"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{milk.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {milk.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*yakult*/}
     <TabsContent
      value="beverages"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{yakult.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {yakult.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*tea*/}
     <TabsContent
      value="beverages"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{tea.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {tea.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*mocktail*/}
     <TabsContent
      value="beverages"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{mocktail.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {mocktail.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*mojito*/}
     <TabsContent
      value="beverages"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{mojito.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {mojito.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*others*/}
     <TabsContent
      value="beverages"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{others.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {others.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*sweet*/}
     <TabsContent
      value="foods"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{sweet.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {sweet.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*pecel*/}
     <TabsContent
      value="foods"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{pecel.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {pecel.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*lunch*/}
     <TabsContent
      value="foods"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{lunch.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {lunch.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*main*/}
     <TabsContent
      value="foods"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{main.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {main.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*ricebowl*/}
     <TabsContent
      value="foods"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{ricebowl.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {ricebowl.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*steak*/}
     <TabsContent
      value="foods"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{steak.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {steak.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*pasta*/}
     <TabsContent
      value="foods"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{pasta.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {pasta.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*pizza*/}
     <TabsContent
      value="foods"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{pizza.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {pizza.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*dimsum*/}
     <TabsContent
      value="foods"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{dimsum.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {dimsum.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>

     {/*light*/}
     <TabsContent
      value="foods"
      className="w-full ">
      <div className="flex flex-col gap-4">
       <h1 className="text-4xl font-bold">{light.title}</h1>
      </div>
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       pagination={{
        clickable: true,
       }}
       modules={[Pagination]}
       className="mySwiper">
       {light.items.map((item, index) => (
        <SwiperSlide key={index}>
         <div className="flex flex-col gap-6 items-center h-[400px] justify-center w-full border rounded-lg p-6 bg-white backdrop-blur-lg mt-5 ">
          <img
           src={item.image}
           alt=""
           className="w-[200px] object-cover"
          />
          <div className="flex flex-col items-center justify-center text-center h-[60px]">
           <h2 className="text-lg font-semibold mt-2 text-black">
            {item.name}
           </h2>
          </div>
          <p className="text-gray-600 text-lg">{item.description}</p>
         </div>
        </SwiperSlide>
       ))}
      </Swiper>
     </TabsContent>
    </Tabs>
   </div>
  </section>
 );
};

export default MobileProduct;
