import React from 'react';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const Blog = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <section className="blog">
      <div className="container">
        <div className="row">
          <div className="col-12"  data-aos="fade-down">
            <div className="blog-text">
              <Title title1="BLOG" title2="Lates News" />
            </div>
            <div className="blog-cards ">
              <Card
                className="blog"
                date="May 1 2021"
                Header="./assets/images/blog-img1.jpg"
                Body="There Are Many Variations Of Passages Available."
                Footer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...."
              />
              <Card
                className="blog"
                date="May 1 2021"
                Header="./assets/images/blog-img2.jpg"
                Body="There Are Many Variations Of Passages Available."
                Footer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...."
              />
              <Card
                className="blog"
                date="May 1 2021"
                Header="./assets/images/blog-img3.jpg"
                Body="There Are Many Variations Of Passages Available."
                Footer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
