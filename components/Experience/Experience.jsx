import React, { useEffect } from 'react';
import Title from '../Title/Title';
import Skills from './Skills';
import Aos from "aos";
import "aos/dist/aos.css"

const Experience = () => {
  useEffect(()=>{
    Aos.init({duration:4000});
  },[])
  return (
    <section className="experience" >
      <div className="container">
        <div className="row">
          <div className="col-6" data-aos="fade-left">
            <div className="experience-img">
              <img src="./assets/images/experience-img.png" alt="" />
            </div>
          </div>
          <div className="col-6" data-aos="fade-right">
            <div className="experience-content">
            <div className="experience-text">
              <Title
                title1="EXPERIENCE"
                title2="Pay For Qualified Traffic"
                desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.."
              />
            </div>
                <Skills title="Designin" per="80%" width="80"/>
                <Skills title="Developing" per="90%" width="90"/>
                <Skills title="SEO & Optimization" per="80%" width="80"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
