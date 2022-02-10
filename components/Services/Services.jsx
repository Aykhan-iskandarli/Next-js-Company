import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import Title from "../Title/Title";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Services = () => {
  useEffect(()=>{
    Aos.init({duration:4000});
  },[])
  return (
    <section className="services">
      <div className="container">
        <div className="row justify-center">
          <div className="col-6 " data-aos="fade-right">
            <div className="services-text">
              <Title
                title1="SERVICES"
                title2="Demand First-Rate Best Services"
                desc=" This is the simply dummy text of the printing and typesetting industry. That has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Contrary to popular belief not simply random text."
              />
              <Button className="primary services-btn">
                View All Services
              </Button>
            </div>
          </div>
          <div className="col-6 " data-aos="zoom-in-down">
            <div className="row">
              <div className="services-cards">
                <div className="col-6 card-6 col-custom " data-aos="fade-right">
                  <Card 
                  
                    className="services-card"
                    Header="./assets/images/custom-shape.svg"
                    header_in="./assets/images/graphic-icon.svg"
                    Body="Graphic Design"
                  />
                </div>
                <div className="col-6 position-top card-6 " data-aos="fade-left">
                  <Card
                    className="services-card"
                    Header="./assets/images/custom-shape.svg"
                    header_in="./assets/images/web-icon.svg"
                    Body="Web Development"
                  />
                </div>
                <div className="col-6 card-6 col-custom" data-aos="fade-right">
                  <Card
                    className="services-card"
                    Header="./assets/images/custom-shape.svg"
                    header_in="./assets/images/web-design-icon.svg"
                    Body="Web Design"
                  />
                </div>
                <div className="col-6 position-top card-6" data-aos="fade-left">
                  <Card
                    className="services-card"
                    Header="./assets/images/custom-shape.svg"
                    header_in="./assets/images/ui-icon.svg"
                    Body="UI / UX Design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
