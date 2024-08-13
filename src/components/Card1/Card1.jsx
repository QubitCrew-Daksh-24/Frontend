import React, { useState } from 'react';
import css from './Card1.module.css';

const Card1 = ({ title, allergens, ingredients, addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (!isAdded) {
      addToCart({ title, allergens, ingredients }); // Pass the entire product object
      setIsAdded(true);
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>{title}</h2>
      <p className={css.allergens}>Allergens: {allergens}</p>
      <p className={css.ingredients}>Ingredients: {ingredients}</p>
      <button
        className={isAdded ? css.addedButton : css.addButton}
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? 'Product Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Card1;
