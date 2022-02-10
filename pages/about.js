import React from 'react';
import AboutUs from '../components/AboutUS/AboutUs';
import Experience from '../components/Experience/Experience';
import HeroPage from '../components/HeroPage/HeroPage';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import {motion} from "framer-motion"

const about = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{ transition: "all .4s ease" }}
  >
          <HeroPage title="About Us" currentPage="About us"/>
          <AboutUs/>
          <NewsLetter/>
          <Experience/>
      </motion.div>
  )
};

export default about;
