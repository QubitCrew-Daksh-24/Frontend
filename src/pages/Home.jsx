import React from 'react';
import Hero from '../components/Hero/Hero';
import Slider from '../components/Slider/Slider';
import Card from '../components/Card/Card';
import Products from '../components/Products/Products';
import Footer from '../components/Footer/Footer';
import Chatbot from '../components/Chatbot/Chatbot';

const Home = ({cartItems,addToCart,removeFromCart}) => {
  return (
    <div>
      <Hero />
      <Slider />
      <Card />
      <Products cartItems={cartItems} addToCart={addToCart} removeFromCart = {removeFromCart}/>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Home;
