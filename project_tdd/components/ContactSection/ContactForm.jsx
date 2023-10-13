import React from "react";

const ContactForm = () => {
  return (
    <div className="md:w-[643px] md:gap-[29px] md:pl-[35px] md:pt-[29px] md:pr-[130px] md:pb-[26px] flex flex-col items-center container mx-auto bg-[#F6F6F7] rounded-xl">
      <div className="max-md:flex max-md:flex-col max-md:justify-center max-md:p-5">
        <h3 className="text-[18px] font-semibold mb-6">Leave a Message</h3>
        <div className="md:w-[478px]">
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
        <button className="mt-[29px] mb-[28px] px-4 py-3 bg-[#4B6BFB] rounded-[5px] text-[#FFF] text-sm] max-md:w-[150px]">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
