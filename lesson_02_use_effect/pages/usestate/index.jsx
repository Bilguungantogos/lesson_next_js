import MyButton from "@/components/button";
import React, { useState } from "react";

const Usestate = () => {
  const [count, setCount] = useState(100);
  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1);
  };
  return (
    <div className="m-5">
      <h1 className="text-4xl text-red-400 text-center mb-10">useState</h1>
      <div>
        <h1 className="text-3xl text-red-400 text-center">
          Тоолуурын утга: <span className="text-black">{count}</span>
        </h1>
        <div className="flex justify-center mt-10">
          <MyButton title="Нэмэх" onClick={add} />
          <MyButton title="Хасах" onClick={sub} />
        </div>
      </div>
    </div>
  );
};

export default Usestate;
