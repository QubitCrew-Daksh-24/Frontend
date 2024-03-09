// Products.js
import React, { useState, useEffect } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import axios from 'axios';

const Products = ({ addToCart }) => {
    const [parent] = useAutoAnimate();
    const [menuProducts, setMenuProducts] = useState(ProductsData);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('/recipe', { params: { ingredients: ['tomato', 'onion', 'garlic'] } });
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product) => product.type === type));
    }

    const handleAddToCart = (product) => {
        addToCart(product);
        alert("Product added to cart!!!")
    };

    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Featured Products and Recipes</h1>

            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                    <li onClick={() => filter("HEALTHY FOOD ")}>HEALTHY FOOD</li>
                    <li onClick={() => filter("BEVERAGES")}>BEVERAGES</li>
                    <li onClick={() => filter("FOOD CARE")}>FOOD CARE</li>
                </ul>

                <div className={css.list} ref={parent}>
                    {menuProducts.map((product, index) => (
                        <div className={css.product} key={index}>
                            <div className="left-s">
                                <div className="name">
                                    <span style={{ fontWeight: 'bold', color: 'white'}}>{product.name}</span>
                                    <span style={{ fontWeight: 'bold', color: 'black'}}>{product.detail}</span>
                                </div>
                                <span>{product.price} $</span>
                                {/* "Add to Cart" button */}
                                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                            <img src={product.img} alt="" className="img-p" />
                        </div>
                    ))}

                    {recipes.map((recipe, index) => (
                        <div className={css.product} key={index}>
                            <div className="left-s">
                                <div className="name">
                                    <span style={{ fontWeight: 'bold', color: 'white'}}>{recipe.title}</span>
                                    <span style={{ fontWeight: 'bold', color: 'black'}}>{recipe.description}</span>
                                </div>
                                <span>{recipe.price} $</span>
                                {/* Assuming "Show Now" button is for a different action */}
                                <div style={{ fontWeight: 'bold', color: 'white' }}>Show Now</div>
                            </div>
                            <img src={recipe.image} alt="" className="img-p" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
