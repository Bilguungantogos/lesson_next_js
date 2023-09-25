import React from "react";

const Useeffect = () => {
  return (
    <div className="m-5">
      <h1 className="text-4xl text-red-400 text-center mb-10">useState</h1>
      <div>
        <h1 className="text-3xl text-red-400 text-center">
          Тоолуурын утга: <span className="text-black"></span>
        </h1>
        <div className="flex justify-center mt-10">
          <button className="border rounded-lg text-white px-5 py-3 mx-4 border-teal-950 bg-green-400 hover:bg-green-600 hover:scale-105">
            Нэмэх
          </button>
          <button className="border rounded-lg text-white px-5 py-3 mx-4 border-teal-950 bg-red-400 hover:bg-red-600 hover:scale-105">
            Хасах
          </button>
        </div>
      </div>
    </div>
  );
};

export default Useeffect;
