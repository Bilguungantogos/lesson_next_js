import React from "react";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="max-sm:px-4 bottom-0 pt-[64px] max-lg:pt-[32px]  w-full px-[352px] max-lg:px-[50px] flex flex-col gap-4 text-base text-[#3B3C4A] bg-[#F6F6F7] mt-[100px]  max-lg:text-[14px]">
      <div className="flex gap-5 lg:justify-between max-lg:justify-between">
        <div className="w-[289px] max-lg:w-[250px]">
          <h2 className="font-semibold text-black">About</h2>
          <p className="mb-6 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="flex gap-1">
            <span className="font-semibold text-black">Email: </span>
            info@jstemplate.net
          </p>
          <p className="flex gap-1">
            <span className="font-semibold text-black">Phone: </span> 880 123
            456 789
          </p>
        </div>
        <div className="flex justify-center">
          <div className=" flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="lg:flex lg:gap-7 max-lg:flex max-lg:flex-col max-lg:gap-4 ">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsLinkedin />
        </div>
      </div>
      <p className="w-full bg-[#E8E8EA] h-[2px] mt-[25px]"></p>
      <div className="sm:flex sm-max:justify-center items-center py-9 gap-16 w-full max-sm:text-[12px]">
        <div className="flex gap-2 font-normal w-[350px] max-sm:justify-center max-sm:mb-5">
          <img src="/logomini.svg" />
          <div>
            <h3 className="flex">
              Meta<span className="font-bold">Blog</span>
            </h3>
            <h3>© All Rights Reserved.</h3>
          </div>
        </div>
        <div className="flex gap-8 w-full sm:justify-end max-sm:justify-center">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
