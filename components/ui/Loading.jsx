// components/Loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-9xl font-bold text-blue-500 animate-pulse-zoom">
        9/1/1
      </div>
      <style jsx>{`
        @keyframes pulse-zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-pulse-zoom {
          animation: pulse-zoom 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;