import React from "react";
import Card from "../components/Card/Card";
import Feature from "../components/Feature/Feature";
import HeroPage from "../components/HeroPage/HeroPage";
import Title from "../components/Title/Title";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Works from "../components/OurWorks/Works";
import { motion } from "framer-motion";

const services = () => {
  return (
    <motion.div
      className="service-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ transition: "all .4s ease" }}
    >
      <HeroPage title="Our Services" currentPage="Services" />
      <div className="row">
        <div className="col-12">
          <div className="container">
            <div className="row service-page-cards justify-center">
              <Card
                className="custom-shape"
                Header="./assets/images/custom-shape.svg"
                header_in="./assets/images/web-icon.svg"
                Body="SEO & Backlinks"
                Footer="This is the simply dummy text of the printing and typesetting industry. It has survived not only five centuries."
              />
              <Card
                className="custom-shape"
                Header="./assets/images/custom-shape.svg"
                header_in="./assets/images/web-design-icon.svg"
                Body="Digital Marketing"
                Footer="This is the simply dummy text of the printing and typesetting industry. It has survived not only five centuries."
              />
              <Card
                className="custom-shape"
                Header="./assets/images/custom-shape.svg"
                header_in="./assets/images/ui-icon.svg"
                Body="Social Media Marketing"
                Footer="This is the simply dummy text of the printing and typesetting industry. It has survived not only five centuries."
              />
              <Card
                className="custom-shape"
                Header="./assets/images/custom-shape.svg"
                header_in="./assets/images/web-icon.svg"
                Body="SEO & Backlinks"
                Footer="This is the simply dummy text of the printing and typesetting industry. It has survived not only five centuries."
              />
              <Card
                className="custom-shape"
                Header="./assets/images/custom-shape.svg"
                header_in="./assets/images/web-icon.svg"
                Body="Digital Marketing"
                Footer="This is the simply dummy text of the printing and typesetting industry. It has survived not only five centuries."
              />
              <Card
                className="custom-shape"
                Header="./assets/images/custom-shape.svg"
                header_in="./assets/images/web-icon.svg"
                Body="Social Media Marketing"
                Footer="This is the simply dummy text of the printing and typesetting industry. It has survived not only five centuries."
              />
            </div>
          </div>
        </div>
      </div>
      <Feature />
      <NewsLetter />
      <Works />
    </motion.div>
  );
};

export default services;
