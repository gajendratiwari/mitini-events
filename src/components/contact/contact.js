import React from "react";
import ContactDetails from "./contactdetails/contactdetails";
import data from "../../assets/database";
import ContactForm from "./form/contactform";

const Contact = () => {
  return (
    <div>
      {data.map((value) => {
        return <ContactDetails data={value.contactdetails} />;
      })}
      <ContactForm />
    </div>
  );
};

export default Contact;
