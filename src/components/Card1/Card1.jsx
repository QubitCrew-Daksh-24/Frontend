// Card.js - Add button to add item to cart
import React from 'react';
import css from './Card1.module.css';

const Card = ({ title, allergens, ingredients, addToCart }) => {
  return (
    <div className={css.container}>
      <h2>{title}</h2>
      <p>{allergens}</p>
      <p>{ingredients}</p>
      {/* Add button to add item to cart */}
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;
