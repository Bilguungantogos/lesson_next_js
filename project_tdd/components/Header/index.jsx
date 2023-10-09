import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navigations = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
const Header = () => {
  const isActive = usePathname();
  return (
    <div className="flex justify-between items-center py-8 px-[350px] mb-24 border bg-[#F6F6F7] max-lg:py-4 max-lg:px-[50px] max-lg:h-[80px] max-sm:px-4">
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
  );
};

export default Header;
