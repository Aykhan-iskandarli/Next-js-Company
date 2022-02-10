import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Title from '../Title/Title';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const NewsLetter = () => {
  useEffect(()=>{
    Aos.init({duration:4000});
  },[])
  return (
    <section className="news-letter">
        <div className="banner-circle-box">
			<span className="circle one right animate-this" ></span>
			<span className="circle two right animate-this" ></span>
			<span className="circle three right animate-this" ></span>
			<span className="circle four right animate-this" ></span>
			<span className="circle five left animate-this" ></span>
			<span className="circle six left animate-this" ></span>
			<span className="circle seven left animate-this" ></span>
			<span className="circle eight left animate-this" ></span>
		</div>
      <div className="container" data-aos="zoom-out-down">
        <Title title1="NEWSLETTER" title2="Stay Always In Touch" desc=" It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout." />
        <div className="news-letter-map">
          <img src="./assets/images/map.png" alt="" />
        </div>
        <div className="subscription-container">
        <div className="subscription">
            <Input placeholder="Enter email address" className="subscription-input" />
            <div className="subs-btn">
            <Button className="subscription-btn">Subscription Now</Button>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
