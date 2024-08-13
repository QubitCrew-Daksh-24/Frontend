// Cart.js - Display added items in the cart
import React, {useState} from 'react';
import { ProductsData } from "../../data/products";
import css from './Cart.module.css';

const Cart = ({ cartItems }) => {
    const [cartDisplay, setCartDisplay] = useState(cartItems)

    return (
        <div>
            <h2>CART</h2>
        <div className={css.container}>
           
        <div className={css.outer}>
            {cartDisplay.map((product, index) => (
                        <div className={css.product} key={index}>
                            <img src={product.img} alt="" className="img-p" />

                            <div className="name">
                                <span style={{ fontWeight: 'bold', color: 'white'}}>{product.name}</span>
                                <br/>
                                <span style={{ fontWeight: 'bold', color: 'black'}}>{product.detail}</span>
                            </div>
                            <span>{product.price} $</span>

                            
                        </div>
                    ))}
        </div>
        </div>
        </div>
    );
};

export default Cart;
