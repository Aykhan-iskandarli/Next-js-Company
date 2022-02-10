import React from 'react';
import Button from '../Button/Button';
import Title from '../Title/Title';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const AboutUs = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
  return (
    <section className='about-us'>
        <div className="container">
            <div className="row column">
                <div className="col-6 flex justify-center "   data-aos="fade-right">
                    <div className="about-us-img">
                        <img src="./assets/images/about-img.png" alt="" />
                    </div>
                </div>
                <div className="col-6" data-aos="fade-left">
                <div className="about-us-content">
                    <Title title1="ABOUT US" title2="Make Easy Your Business With Us" className="about-title" />
                    <span>It is a long established fact that a reader will be distracted</span>
                    <p>This is the simply dummy text of the printing and typesetting industry. That has been the industry's standard</p>
                    <p>This text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <Button className="primary about-btn">Read More</Button>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
};

export default AboutUs;
