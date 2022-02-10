import React from 'react';
import ContactUS from '../components/ContactUS/ContactUS';
import HeroPage from '../components/HeroPage/HeroPage';
import Title from '../components/Title/Title';
import data from "../data"

const portfolio = () => {
  return (
      <div className='portfolio'>
          <HeroPage title="Our Portfolio " currentPage="Portfolio" />
            <div className='container '>
              <div className="row justify-between mobile-p">
            {data.protfolio.map((job,id) => (
                <div key={id} className="col-6 portfolio-page ">
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
            ))}
              </div>

            </div>
          <ContactUS/>

      </div>
  )
};

export default portfolio;
