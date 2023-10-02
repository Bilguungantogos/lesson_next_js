import React from "react";
import Link from "next/link";

const Card = ({ blogpost }) => {
  return (
    <Link href={"/blog/" + blogpost.id}>
      <div className="flex border flex-col p-4 w-[392px]">
        <img
          src={blogpost.cover_image ? blogpost.cover_image : "/default.avif"}
          className="h-[240px] object-cover"
        />
        <div className="flex flex-col">
          <span className="py-1 px-[10px] w-[77px] text-[#4B6BFB] bg-[#d2daff] first-letter:uppercase ">
            {blogpost?.type_of}
          </span>
          <h2>{blogpost.title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={blogpost.user.profile_image}
            className="w-[36px] h-[36px] rounded-full"
          />
          <p>{blogpost.user.name}</p>
          <p></p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
