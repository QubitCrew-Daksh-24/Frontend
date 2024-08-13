import React, { useState, useEffect } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import axios from 'axios';

const Products = ({ cartItems, addToCart, removeFromCart }) => {
    const [parent] = useAutoAnimate();
    const [menuProducts, setMenuProducts] = useState(ProductsData);
    const [recipes, setRecipes] = useState([]);
    const [filterType, setFilterType] = useState("All");

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

    useEffect(() => {
        if (filterType === "All") {
            setMenuProducts(ProductsData);
        } else {
            setMenuProducts(ProductsData.filter((product) => product.type === filterType));
        }
    }, [filterType]);

    const handleFilterChange = (event) => {
        setFilterType(event.target.value);
    };

    const handleAddToCart = (product) => {
        if (cartItems.includes(product)) {
            removeFromCart(product);
        } else {
            addToCart(product);
        }
    };

    const isProductInCart = (product) => {
        return cartItems.includes(product);
    };

    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Featured Products and Recipes</h1>

            <div className={css.products}>
                <div className={css.filterContainer}>
                    <br/>
                    <select id="filter" value={filterType} onChange={handleFilterChange} className={css.filterSelect}>
                        <option value="All">All</option>
                        <option value="HEALTHY FOOD ">HEALTHY FOOD</option>
                        <option value="BEVERAGES">BEVERAGES</option>
                        <option value="FOOD CARE">FOOD CARE</option>
                    </select>
                </div>

                <div className={css.list} ref={parent}>
                    {menuProducts.map((product, index) => (
                        <div className={css.product} key={index}>
                            <img src={product.img} alt="" className="img-p" />

                            <div className="name">
                                <span style={{ fontWeight: 'bold', color: 'white' }}>{product.name}</span><br/>
                                <span style={{ fontWeight: 'bold', color: 'black' }}>{product.detail}</span>
                            </div>
                            <span>{product.price} $</span>
                            <br />
                            <button
                                className={isProductInCart(product) ? css.added : ''}
                                onClick={() => handleAddToCart(product)}
                            >
                                {isProductInCart(product) ? "Added to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    ))}

                    {recipes.map((recipe, index) => (
                        <div className={css.product} key={index}>
                            <div className="left-s">
                                <div className="name">
                                    <span style={{ fontWeight: 'bold', color: 'white' }}>{recipe.title}</span>
                                    <span style={{ fontWeight: 'bold', color: 'black' }}>{recipe.description}</span>
                                </div>
                                <span>{recipe.price} $</span>
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
