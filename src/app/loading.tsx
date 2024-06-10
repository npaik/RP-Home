import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex items-center justify-center mb-6">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
      <div className="text-center">
        <h1 className="text-8xl text-gray-500 opacity-75 font-semibold">
          RISEPARTNERS
        </h1>
        <p className="text-4xl text-gray-500 opacity-50 mt-6">LOADING</p>
      </div>
    </div>
  );
}
