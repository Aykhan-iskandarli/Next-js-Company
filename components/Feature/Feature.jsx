import React from "react";
import Card from "../Card/Card";
import Title from "../Title/Title";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Feature = () => {
  useEffect(()=>{
    Aos.init({duration:4000});
  },[])
  return (
    <section className="feature-section"   >
      <div className="container">
        <Title title1="Features" title2="What We Offer" data-aos="fade-up"/>
        <div className="cards column services-page" data-aos="zoom-out-down">
          <Card
            className="custom-shape"
            Number="01"
            Header="./assets/images/custom-shape.svg"
            Body="SEO & Backlinks"
            Footer="This is the simply dummy text of the printing and typesetting industry. It has survived not only five centuries."
          />
          <Card 
            className="custom-shape"
            Number="02"
            Header="./assets/images/custom-shape.svg"
            Body="Digital Marketing"
            Footer="This is the simply dummy text of the printing and typesetting industry. It has survived not only five centuries."
          />
          <Card
            className="custom-shape"
            Number="06"
            Header="./assets/images/custom-shape.svg"
            Body="Social Media Marketing"
            Footer="This is the simply dummy text of the printing and typesetting industry. It has survived not only five centuries."
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
