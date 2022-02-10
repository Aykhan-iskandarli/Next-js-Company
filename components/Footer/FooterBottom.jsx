import Link from 'next/link';
import React from 'react';

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container ">
        <div className="flex mobile">
          <div className='footer-desc'>
            <p>
              Copyright &copy; 2022 <span>OneStop Tech</span>All Rights
              Reserved.
            </p>
          </div>
          <ul className="bottom-menu">
            <li>
              <Link href="/">
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Terms Of Services</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Cookie Policy</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
