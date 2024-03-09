import React from 'react';
import css from './Footer.module.css';
import Logo from "../../assets/logo.png";

import {
 InboxIcon,
 PhoneIcon,
 LocationMarkerIcon,
 LoginIcon,
 UsersIcon,
 LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
 return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="NutriNudge Logo" />
          <span className={css.logoText}>NutriNudge</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>Sarathy Nagar, Kudrathur -Sriperumbedur, Chennai - TamilNadu - 600037</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:123456789">123456789</a>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support@NutriNudge.com">support@NutriNudge.com</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <a href="/signin">Sign In</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <p>About us</p>
              </a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <a href="/privacy">Safety Privacy & Terms</a>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyRight}>
        <span>&copy; 2024 NutriNudge. All rights reserved.</span>
        <span>Created with ❤️ by Qubitcrew, Inc.</span>
      </div>
    </div>
 );
};

export default Footer;
