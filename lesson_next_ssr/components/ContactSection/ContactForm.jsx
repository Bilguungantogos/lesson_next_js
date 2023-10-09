import React from "react";

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;
