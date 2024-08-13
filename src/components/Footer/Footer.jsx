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
            <span className={css.title}>Contact Us</span>
            <div className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>Sarathy Nagar, Kudrathur - Sriperumbedur, Chennai - TamilNadu - 600037</span>
            </div>
            <div className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:123456789">123456789</a>
            </div>
            <div className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support@NutriNudge.com">support@NutriNudge.com</a>
            </div>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span className={css.title}>Account</span>
            <div className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <a href="/signin">Sign In</a>
            </div>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span className={css.title}>Company</span>
            <div className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <p>About us</p>
              </a>
            </div>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span className={css.title}>Resources</span>
            <div className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <a href="/privacy">Safety Privacy & Terms</a>
            </div>
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
