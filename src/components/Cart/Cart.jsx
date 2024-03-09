// Cart.js - Display added items in the cart
import React from 'react';
import css from './Cart.module.css';

const Cart = ({ cartItems }) => {
    return (
        <div className={css.container}>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
