import AboutUs from "../components/AboutUS/AboutUs";
import Blog from "../components/Blog/Blog";
import ContactUS from "../components/ContactUS/ContactUS";
import Experience from "../components/Experience/Experience";
import Feature from "../components/Feature/Feature";
import Hero from "../components/Hero/Hero";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Works from "../components/OurWorks/Works";
import Services from "../components/Services/Services";
import SlickSlider from "../components/SlickSlider/SlickSlider";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";


export default function Home() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div
  
      data-aos="fade-down"
    >
      <Hero />
      <Feature />
      <AboutUs />
      <NewsLetter />
      <Services />
      <Experience />
      <Works />
      <SlickSlider />
      <Blog />
      <ContactUS />
    </div>
  );
}
