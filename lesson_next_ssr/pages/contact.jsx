import ContactForm from "@/components/ContactSection/ContactForm";
import ContactInfo from "@/components/ContactSection/ContactInfo";
import React from "react";

const contact = () => {
  return (
    <div className="max-md:h-[100vh] h-[50vh] mb-[400px]">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default contact;
