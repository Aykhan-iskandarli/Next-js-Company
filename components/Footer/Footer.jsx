import React from 'react';
import Logo from '../Logo/Logo';
import FooterBottom from './FooterBottom';
import {FaFacebookF} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdLocationPin} from "react-icons/md"


import Link from 'next/link';
import Button from '../Button/Button';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="shape-footer">
        <img src="./assets/images/shape-footer.svg" alt="" />
      </div>
      <div className="banner-circle-box">
        <span className="circle one right animate-this"></span>
        <span className="circle two right animate-this"></span>
        <span className="circle three right animate-this"></span>
        <span className="circle four right animate-this"></span>
        <span className="circle five left animate-this"></span>
        <span className="circle six left animate-this"></span>
        <span className="circle seven left animate-this"></span>
        <span className="circle eight left animate-this"></span>
      </div>

      <div className="container">
        {/* <div className="footer-get-started">
          <div className="get-started">
            <div className="get-started-info">
              <h2>Ready To Get Started?</h2>
              <p>Tell us your problem and get the services from you</p>
            </div>
            <div className="get-started-btn">
              <Button>Get Started</Button>
            </div>
          </div>
        </div> */}
        <div className="row mobile-footer">
          <div className="col-4">
            <ul className="footer-info">
              <li>
                <Logo />
              </li>
              <li className='footer-text'>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                Contrary to popular belief, This is not simply random text.
              </li>
              <div className="social-icons">
                <Link href="/">
                  <span>
                    <a>
                      <FaFacebookF />
                    </a>
                  </span>
                </Link>
                <Link href="/">
                  <span>
                    <a>
                      <FaTwitter />
                    </a>
                  </span>
                </Link>
                <Link href="/">
                  <span>
                    <a>
                      <FaInstagram />
                    </a>
                  </span>
                </Link>
              </div>
            </ul>
          </div>
          <div className="col-3">
            <div className="footer-link-box footer-menu-box-1">
              <div className="box-1">
                <h3 className="footer-title">OUR LINKS</h3>
                <ul className="footer-links-menu column-2">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="footer-link-box">
              <div className="box-2">
                <h3 className="footer-title">OUR SERVICES</h3>
                <ul className="footer-links-menu">
                  <li>
                    <Link href="/">
                      <a>Graphic Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Web Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Web Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>UI / UX</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>SEO Marketing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>Mobile App</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="footer-link-box">
              <h3 className="footer-title">CONTACT US</h3>
              <ul className="footer-links-menu footer-contact">
                <li>
                  <span>
                    <BsFillTelephoneFill />
                  </span>
                  <div className="phone-info">
                    <p>+123 456 7890</p>
                    <p>+123 456 7890</p>
                  </div>
                </li>
                <li>
                  <span>
                    <GrMail />
                  </span>
                  <div className="mail-info">
                    <p>info@email.com</p>
                    <p>services@email.com</p>
                  </div>
                </li>
                <li>
                  <span>
                    <MdLocationPin />
                  </span>
                  <div className="phone-info">
                    <p>2363 Norma Avenue, Dayton, Ohio, 45406</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
