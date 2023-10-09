import Link from "next/link";
import React from "react";
const ErrorPage = () => {
  return (
    <div className="flex gap-10 justify-center items-center my-24 h-[56vh]">
      <h1 className="text-[72px] font-normal">404</h1>
      <div className="w-[1px] h-[156px] bg-[#E8E8EA]"></div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="w-[392px] text-[#696A75]">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </p>
        <Link
          className="px-4 py-3 bg-[#4B6BFB] w-[140px] rounded-[10px] text-[#FFF] text-sm]"
          href="/"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
