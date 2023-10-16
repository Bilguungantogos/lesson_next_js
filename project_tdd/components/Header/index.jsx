import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/Ai";

const navigations = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const isActive = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center py-8 px-[350px] mb-24 border bg-[#F6F6F7] max-lg:py-4 max-lg:px-[50px] max-lg:h-[80px] max-sm:px-4 max-sm:hidden">
        <div className="w-[158px] h-[36px] max-lg:w-[90px] max-lg:h-[22px] ">
          <Link href="/">
            <img src="/Logo.png" className="w-full h-full" />
          </Link>
        </div>
        <div className="flex gap-10 max-lg:gap-4 max-lg:text-[14px] text-xl">
          {navigations.map((navigation, i) => (
            <Link
              className={`font-bold transition-all duration-75  ${
                isActive === navigation.path
                  ? "text-gray-400"
                  : "hover:text-gray-400 "
              }`}
              key={i}
              href={navigation.path}
            >
              {navigation.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center bg-[#F4F4F5] py-2 pl-4 pr-2 gap-3 max-lg:py-1 max-lg:pl-2 max-lg:pr-1 text-[14px]">
          <input placeholder="Search" className=""></input>
          <img src="/search.svg" className="h-4 w-4" />
        </div>
      </div>
      <div className="sm:hidden px-10 py-5  bg-[#F6F6F7] flex justify-between items-center ">
        <div className="w-[158px] h-[36px] max-lg:w-[90px] max-lg:h-[22px] ">
          <Link href="/">
            <img src="/Logo.png" className="w-full h-full" onClick={{}} />
          </Link>
        </div>
        <div onClick={handleNav}>
          <AiOutlineMenu size={20} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed right-0 top-0 w-[50%] sm:hidden h-screen bg-[#F6F6F7] p-5 ease-in duration-500"
            : "fixed right-[-100%]  top-0 p-5 ease-in duration-500"
        }
      >
        <div onClick={handleNav} className="cursor-pointer">
          <AiOutlineClose size={20} />
        </div>
        <div className="flex flex-col mt-10 gap-8 text-sm">
          {navigations.map((navigation, i) => (
            <Link
              className={` transition-all duration-75  ${
                isActive === navigation.path
                  ? "text-gray-400"
                  : "hover:text-gray-400 "
              }`}
              key={i}
              href={navigation.path}
              onClick={handleNav}
            >
              {navigation.name}
            </Link>
          ))}
          <div className="flex items-center bg-[#F4F4F5] py-2 pr-2 gap-2 text-sm">
            <input placeholder="Search" className="w-[120px]"></input>
            <img src="/search.svg" className="h-4 w-4 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
