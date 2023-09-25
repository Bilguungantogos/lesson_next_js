import React from "react";

const MyButton = ({ onClick }, { title }) => {
  return (
    <button
      className="border rounded-lg text-white px-5 py-3 mx-4 border-teal-950 bg-green-400 hover:bg-green-600 hover:scale-105"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MyButton;
