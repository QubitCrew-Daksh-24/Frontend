import React from 'react';
import css from './Cart.module.css';

const Cart = ({ cartItems }) => {
    return (
        <div className={css.container}>
            <h2>Cart</h2>
            <div className={css.cartItems}>
                {cartItems.map((item, index) => (
                    <div key={index} className={css.card}>
                        <h3 className={css.title}>{item.name}</h3>
                        <p className={css.details}>Allergens: {item.allergens}</p>
                        <p className={css.details}>Ingredients: {item.ingredients}</p>
                        <p className={css.price}>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
