import Link from "next/link";
import React from "react";
const ErrorPage = () => {
  return (
    <div className="md:flex max-md:flex max-md:flex-col max-md:gap-4 gap-10 justify-center items-center my-24 h-[56vh]">
      <h1 className="max-md:text-[90px] text-[72px] font-normal">404</h1>
      <div className="w-[1px] md:h-[156px] bg-[#E8E8EA]"></div>
      <div className="max-md:text-center max-md:mx-4 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="md:w-[392px] text-[#696A75]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link
          className="max-md:mx-auto px-4 py-3 bg-[#4B6BFB] w-[140px] rounded-[10px] text-[#FFF] text-sm]"
          href="/"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
