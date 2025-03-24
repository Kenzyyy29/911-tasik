import {FaStar} from "react-icons/fa";

const review = [
 {
  name: "Fanny Tjong",
  text:
   "Asiik, tempatnya luas, cukup aman ajak anak2.. Tp kalo outdoor nya udah mule rame asep roko mulai tercium, mule terasa ga nyaman.., 🙏😁 ",
  image: "/review/1.png",
 },
 {
  name: "Aditia Nur Rahman",
  text:
   "pas mudik mampir sini, nyaman kalo masi siang soalnya ga terlalu rame, service nya mayan cepet. Minuman dan makanan enak standard",
  image: "/review/3.png",
 },
];

const ReviewCards = () => {
 return (
  <div className="flex flex-col gap-5 w-full ">
   {review.map((item, index) => (
    <div
     key={index}
     className="flex flex-col gap-3 rounded-xl shadow-md border border-gray-300 p-5 ">
     <div className="flex items-center gap-2">
      <img
       src={item.image}
       alt=""
       className="w-10 h-10"
      />
      <div className="flex flex-col text-start">
       <h1 className=" font-semibold">{item.name}</h1>
       <div className="flex gap-1 text-[gold] text-[10px]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
       </div>
      </div>
     </div>
     <div className="flex text-start">{item.text}</div>
    </div>
   ))}
  </div>
 );
};

export default ReviewCards;
