import React, { useState, useEffect, useMemo } from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import HeroImg1 from '../../assets/hero1.png';
import HeroImg2 from '../../assets/hero2.png';
import HeroImg3 from '../../assets/hero3.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Hero = () => {
 const images = useMemo(() => [
    HeroImg,
    HeroImg1,
    HeroImg2,
    HeroImg3,
 ], []);

 const [currentImage, setCurrentImage] = useState(images[Math.floor(Math.random() * images.length)]);

 useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 3000);

    return () => clearInterval(timer);
 }, [images]);

 const transition = { duration: 3, type: "spring" };

 return (
    <div className={css.container}>
      <div className={css.h_sides}>
        <span className={css.text1}>Personalise your experience</span>
        <div className={css.text2}>
          <span>Natural Ingredients</span>
          <span>
            {" "}
            Lorem ipsum whatever the text that your trying to place it right.
          </span>
        </div>
      </div>

      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.circle}
          transition={transition}
        >
        </motion.div>

        <motion.img
          transition={transition}
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={currentImage}
          alt="Hero Image"
          width={600}
          className='cover'
        />

        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className={css.cart2}
        >
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Sign up Now</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly traffic</span>
        </div>
        <div className={css.customers}>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
 );
};

export default Hero;
