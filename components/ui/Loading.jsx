const Loading = ({fadeOut}) => {
 return (
  <div
   className={`flex items-center justify-center h-screen transition-opacity duration-500 ${
    fadeOut ? "opacity-0" : "opacity-100"
   } bg-white`}>
   <div className="loader">
    <span
     className="text-9xl font-bold text-black animate-pulse "
     style={{fontFamily: "Agency FB"}}>
     9/1/1
    </span>
   </div>
   <style jsx>{`
    .loader {
     position: relative;
     overflow: hidden;
    }

    .animate-gradient {
     background-size: 200% 200%;
     animation: gradientAnimation 2s ease infinite;
    }

    @keyframes gradientAnimation {
     0% {
      background-position: 0% 50%;
     }
     50% {
      background-position: 100% 50%;
     }
     100% {
      background-position: 0% 50%;
     }
    }
   `}</style>
  </div>
 );
};

export default Loading;
