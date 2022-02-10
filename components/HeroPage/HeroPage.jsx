import Link from "next/link";
import React from "react";
import BannerCircle from "../BannerCircle/BannerCircle";
import Button from "../Button/Button";

const HeroPage = ({ children, title, currentPage }) => {
  return (
    <section className="heroPage-section">
      <div class="banner-circle-box">
        <span className="circle one right "></span>
        <span className="circle two right "></span>
        <span className="circle three right "></span>
        <span className="circle four right "></span>
        <span className="circle five left "></span>
        <span className="circle six left "></span>
        <span className="circle seven left "></span>
        <span className="circle eight left "></span>
        <span className="circle nine left "></span>
        <span className="circle ten left "></span>
      </div>
      <BannerCircle />
      <div className="container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heroPage-content">
              <h1>{title}</h1>
              <div className="heroPage">
                <Link href="/">
                  <a>Home</a>
                </Link>
                <div className="herPage-sec">
                  <img src="./assets/images/arrow.svg" alt="" /> {currentPage}
                </div>
              </div>
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

export default HeroPage;
