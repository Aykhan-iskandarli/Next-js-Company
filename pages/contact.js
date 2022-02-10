import React from "react";
import ContactUS from "../components/ContactUS/ContactUS";
import HeroPage from "../components/HeroPage/HeroPage";
import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ transition: "all .4s ease" }}
    >
      <HeroPage title="Contact Us" currentPage="Contact Us" />
      <ContactUS />
      <div className="container">
        <div className="row contact-page">
          <div className="col-8">
            <div className="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.43465759905!2d49.7849199826634!3d40.39470211181718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1634763745501!5m2!1sen!2s"
                width="700"
                height="450"
                style={{ border: "0", height: "560px", borderRadius: "20px" }}
                className="googlemap"
                allowFullScreen=""
                title="myFrame"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default contact;
