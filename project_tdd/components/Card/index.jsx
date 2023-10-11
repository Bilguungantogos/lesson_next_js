import React from "react";
import Link from "next/link";
import { formatdate } from "@/utils/functions";
import Image from "next/image";

const Card = ({ blogpost }) => {
  return (
    <Link href={"/blog/" + blogpost.id}>
      <div className="flex border flex-col p-4 gap-5 ">
        <Image
          width={1000}
          height={1000}
          src={blogpost.cover_image ? blogpost.cover_image : "/default.avif"}
          className="h-[240px] object-cover"
        />
        <div className="flex flex-col ">
          <span className="mb-[18px] text-center py-1 px-[10px] w-[77px] text-[#4B6BFB] bg-[#dce2fb] first-letter:uppercase ">
            {blogpost?.type_of}
          </span>
          <h2 className="text-2xl font-semibold truncate ">{blogpost.title}</h2>
        </div>
        <div className="flex items-center gap-2 text-[#97989F]">
          <img
            src={blogpost.user.profile_image}
            className="w-[36px] h-[36px] rounded-full"
          />
          <p>{blogpost.user.name}</p>
          <p className="ml-6">{formatdate(blogpost.created_at)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
