import React from "react";
import css from "./Card.module.css";
import ReactCompareImage from "react-compare-image";
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Card = () => {
 return (
    <div className={css.Card}>
      <div className={css.left}>
        <span>Preview Here</span>
        <span>Never buy anything allergic to you!</span>
        <span>Try Now!</span>
      </div>

      <div className={css.right}>
        <div className={css.wrapper}>
            <ReactCompareImage leftImage={Before}
            rightImage={After} />
        </div>
      </div>
    </div>

 );
};

export default Card;
