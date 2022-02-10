import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button"
import Title from "../Title/Title";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const ContactUS = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <section className="contactUs">
      <div className="container">
        <div className="row">
          <div className="col-6" data-aos="fade-left">
            <div className="contact-form">
              <Title
                className="contact-text"
                title1="CONTACT"
                title2="Get In Touch"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <form>
              <div className="row">
                <div className="col-6" data-aos="fade-right">
                  <div className="form-group">
                    <Input type="text" placeholder="First Name" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <Input type="text" placeholder="Last Name " />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <Input type="email" placeholder="Email Address" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <Input type="text" placeholder="Phone Number " />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>
              <Button className="contact-btn primary">Submit</Button>
            </form>
          </div>
          <div className="col-6">
            <div className="contact-img">
              <img src="./assets/images/contact-img.png" alt="" />
            </div>
          </div>
        </div>
        {/* <div className="row">
            <div className="col-6">
                <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.43465759905!2d49.7849199826634!3d40.39470211181718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2sBaku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1634763745501!5m2!1sen!2s" width="600" height="450" style={{border:"0", height:"560px"}} className="googlemap" allowFullScreen="" title="myFrame" loading="lazy"></iframe>
                </div>
            </div>
        </div> */}
      </div>
    </section>
  );
};

export default ContactUS;
