import React from "react";
import HeroPage from "../components/HeroPage/HeroPage";
import { motion } from "framer-motion";
import Feature from "../components/Feature/Feature";
import Works from "../components/OurWorks/Works";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ transition: "all .4s ease" }}
    >
      <HeroPage title="Our Blog" currentPage="Blog" />
      <Feature />
      <NewsLetter />
      <Works />
    </motion.div>
  );
};

export default blog;
