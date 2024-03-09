import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home'; 
// import Products from './pages/Signup'; 
import Contact from './pages/Contact'; 
import Questionnaire from './components/Questionnaire/Questionnaire';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Questionnaire />} />
        <Route path="/home" element={<Home addToCart={addToCart}  />} />
        {/* <Route path="/products" element={<Products addToCart={addToCart} />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
