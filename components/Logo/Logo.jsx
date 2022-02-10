import Link from "next/link";
import React from "react";

const Logo = ({navbar}) => {
  return (
     <>
        <Link href="/">
        <a className="logo">
          <img
            src={navbar ? "assets/images/logo.png" : "assets/images/logo-w.png"}
            alt=""
          />
        </a>
      </Link>
      <Link href="/">
        <a className="logo-mobil">
          <img src="./assets/images/logo.png" alt="" />
        </a>
      </Link>
     </>
  );
};

export default Logo;
