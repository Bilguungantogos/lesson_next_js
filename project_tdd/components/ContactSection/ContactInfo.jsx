import React from "react";

const ContactInfo = () => {
  return (
    <div className="container my-[100px] flex flex-col items-center mx-auto ">
      <div className="w-[624px]">
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <p className="text-[#696A75] text-[16px] my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
      <div className="flex py-4 gap-[50px] w-[624px]">
        <div className="p-4 rounded-[10px] border-slate-300 border-2 w-[50%] h-[133px]">
          <h2 className="text-[24px] font-semibold mb-3">Address</h2>
          <p className="text-[#696A75] text-[18px]">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className="p-4 rounded-[10px] border-slate-300 border-2 w-[50%] h-[133px]">
          <h2 className="text-[24px] font-semibold mb-3">Contact</h2>
          <p className="text-[#696A75] text-[18px]">313-332-8662</p>
          <p className="text-[#696A75] text-[18px]">info@email.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
