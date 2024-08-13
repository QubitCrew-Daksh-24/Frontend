import React, { useState } from 'react';
import axios from 'axios';
import { ProductsData } from '../../data/products'; // Import sample products data
import Card from '../Card/Card';
import './Search.css'; // Import the CSS file for styling

const Search = () => {
  const [query, setQuery] = useState('');
  const [allergens, setAllergens] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post('/search', { query, allergens });
      setSearchResults(response.data);
      setError('');
    } catch (error) {
      console.error('Error searching:', error);
      setError('Error searching. Please try again.');
    }
  };

  return (
    <div className="search-container">
      <h2 className="search-title">Search Products</h2>
      <div className="search-inputs">
        <input
          type="text"
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search query"
        />
        <input
          type="text"
          className="allergens-select"
          value={allergens}
          onChange={(e) => setAllergens(e.target.value)}
          placeholder="Allergens"
        />
        <button
          className="search-button"
          onClick={handleSearch}
          disabled={!query && !allergens}
        >
          Search
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="search-results">
        {/* Display search results */}
        {searchResults.map((result, index) => (
          <Card
            key={index}
            title={result['Food Product']}
            allergens={result.Allergens}
            ingredients={result.Ingredients}
          />
        ))}
        {/* Display existing products */}
        {ProductsData.map((product, index) => (
          <Card
            key={index}
            title={product.name}
            allergens={product.allergens}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
