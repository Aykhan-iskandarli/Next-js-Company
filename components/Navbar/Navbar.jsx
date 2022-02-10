import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { useRouter } from "next/router";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const scrollBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", scrollBackground);
  });

  return (
    <header>
        <nav className={navbar ? "navbar sticky" : "navbar"}>
      <div className="container flex justify-between">
      <Logo navbar={navbar} />
      <div
            className={open ? "hamburger active-burger" : "hamburger"} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={open ? "menu-list active_menu" : "menu-list"}>
            <li >
              <Link href="/" >
                <a onClick={() => setOpen(false)}  className={router.pathname == "/" ? "active" : ""}  >Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" >
                <a onClick={() => setOpen(false)} className={router.pathname == "/about" ? "active" : ""}>About us</a>
              </Link>
            </li>
            <li>
              <Link href="/services" >
                <a onClick={() => setOpen(false)} className={router.pathname == "/services" ? "active" : ""}>Services</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" >
                <a onClick={() => setOpen(false)} className={router.pathname == "/portfolio" ? "active" : ""}>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/blog" >
                <a onClick={() => setOpen(false)} className={router.pathname == "/blog" ? "active" : ""}>Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" >
                <a onClick={() => setOpen(false)} className={router.pathname == "/contact" ? "active" : ""}>Contact us</a>
              </Link>
            </li>
            <li className="button" >
              <Button className="primary">Get Started</Button>
            </li>
          </ul>
      </div>
         
        </nav>
    </header>
  );
};

export default Navbar;
