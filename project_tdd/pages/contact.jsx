import ContactForm from "@/components/ContactSection/ContactForm";
import ContactInfo from "@/components/ContactSection/ContactInfo";
import React from "react";

const contact = () => {
  return (
    <div className="max-md:h-[130vh] h-[50vh] md:mb-[650px] mb-[100px]">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default contact;
