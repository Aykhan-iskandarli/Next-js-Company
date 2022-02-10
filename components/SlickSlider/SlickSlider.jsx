import React, { useState } from "react";
import Slider from "react-slick";
import Title from "../Title/Title";
import data from "../../data"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const SlickSlider = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <span>
          {" "}
          <FaArrowRight />
        </span>
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <span>
          <FaArrowLeft />
        </span>
      </div>
    );
  };

  

  const [imageIndex, setImageIndex] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    lazyLoad:true,
    centerMode: true,
    centerPadding: 0,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
     responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
 

  };
  return (
    <div className="slider">
      <div className="container ">
        <div className="row justify-center">
          <Title title1="TEAM" title2="Our Creative Team" />
          <div className="row ">
            <div className="col-12 " data-aos="fade-up">
              <Slider {...settings}>
                {data.team.map((team, idx) => (
                  <div
                    key={idx}
                    className={
                      idx === imageIndex
                        ? "slider-box activeSlider"
                        : "slider-box"
                    }
                  >
                    <div className="col-4 slider-box-col">
                      <div className="team-img-box">
                        <img src={team.image} alt="" />
                        <div className="team-img-shape">
                          <img
                            src="./assets/images/custom-team-shape.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="team-name">
                        <h2>{team.name}</h2>
                        <p>{team.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlickSlider;
