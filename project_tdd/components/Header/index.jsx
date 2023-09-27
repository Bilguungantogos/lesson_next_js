import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between py-8 px-[350px]">
      <div className="w-[158px] h-[36px]">
        <Link href="/">
          <img src="/Logo.png" className="w-full h-full" />
        </Link>
      </div>
      <div className="flex gap-10">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex items-center bg-gray-100 py-2 pl-4 pr-2 gap-3 text-[14px]">
        <input placeholder="Search" className=""></input>
        <img src="/search.svg" className="h-4 w-4" />
      </div>
    </div>
  );
};

export default Header;
