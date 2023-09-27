import React from "react";

const Card = ({ allblogpost }) => {
  return (
    <div className="flex border flex-col p-4">
      <img
        src={
          allblogpost.cover_image ? allblogpost.cover_image : "/default.avif"
        }
        className="w-full h-full"
      />
      <div className="flex flex-col">
        <span>{allblogpost?.type_of}</span>
        <h2>{allblogpost.title}</h2>
      </div>
      <div className="flex items-center gap-2">
        <img
          src={allblogpost.user.profile_image}
          className="w-[36px] h-[36px] rounded-full"
        />
        <p>{allblogpost.user.name}</p>
        <p></p>
      </div>
    </div>
  );
};

export default Card;
