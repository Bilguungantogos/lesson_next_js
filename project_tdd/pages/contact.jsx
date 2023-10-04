import React from "react";

const contact = () => {
  return (
    <div className="h-[50vh] mb-[250px]">
      <div className="container my-[100px] flex flex-col items-center mx-auto ">
        <div className="w-[624px]">
          <h1 className="text-3xl font-semibold">Contact Us</h1>
          <p className="text-[#696A75] text-[16px] my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
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
      <div className="w-[643px] gap-[29px] pl-[35px] pt-[29px] pr-[130px] pb-[26px] flex flex-col items-center container mx-auto bg-[#F6F6F7] rounded-xl">
        <div>
          <h3 className="text-[18px] font-semibold mb-6">Leave a Message</h3>
          <div className="w-[478px]">
            <div className="flex gap-7">
              <input
                className="pl-4  py-[14px] rounded-md w-[50%]"
                placeholder="Your Name"
              ></input>
              <input
                className="pl-4  py-[14px] rounded-md w-[50%]"
                placeholder="Your Email"
              ></input>
            </div>
            <input
              className="pl-4  py-[14px] rounded-md w-full my-4"
              placeholder="Subject"
            ></input>
            <textarea
              className="w-full h-[134px] py-[14px] pl-4"
              placeholder="Write a message"
            ></textarea>
          </div>
          <button className="mt-[29px] mb-[28px] px-4 py-3 bg-[#4B6BFB] rounded-[5px] text-[#FFF] text-sm]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default contact;
