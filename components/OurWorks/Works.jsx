import React from 'react';
import Slider from "react-slick";
import data from "../../data"
import Title from '../Title/Title';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Works = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
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
    <div className="workus" >
      <div className="row">
        <Title title1="PORTFOLIO" title2="Our Works" />
        <div className="col-12" data-aos="fade-up">
          <Slider {...settings}>
            {data.protfolio.map((job,id) => (
              <div key={id} className="row portfolio-bg ">
                <div className="col-4 mr">
                  <div className="portfolio-boxs">
                    <div className="work-img-box">
                      <img src={job.image} alt="" />
                    </div>
                    <div className="works-name">
                      <Title
                        title1="Graphic Design"
                        title2="It Is A Long Established Fact That A Reader Will Be Distracted."
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Works;
