import React from 'react';
import Button from '../Button/Button';


const Hero = () => {
  return (
    <section className="hero-section" >

        <div className="banner-circle-box">
			<span className="circle one right " ></span>
			<span className="circle two right " ></span>
			<span className="circle three right " ></span>
			<span className="circle four right " ></span>
			<span className="circle five left " ></span>
			<span className="circle six left " ></span>
			<span className="circle seven left " ></span>
			<span className="circle eight left " ></span>
			<span className="circle nine left " ></span>
			<span className="circle ten left " ></span>
		</div>

        <div className="row">
            <div className="container flex column">
            <div className="col-6 align-center">
            <div className="hero-content">
              <h1 className="hero-title">
              Boost Your Business At Top Level
              </h1>
              <p className="hero-desc">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="hero-btn">
                <Button className="primary">Contact us</Button>
            </div>
            </div>
          </div>
          <div className="col-6">
            <div className="hero-img">
              <img src="./assets/images/banner-img.png" alt="" />
            </div>
          </div>
            </div>
         
        </div>
        <div className="hero">
          <div className="shape">
            <img src="./assets/images/shape.svg" alt="" />
          </div>
        </div>
    </section>
  );
  
  
  
};

export default Hero;
