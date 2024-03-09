// Search.js (React frontend)
import React, { useState } from 'react';
import axios from 'axios';
import { ProductsData } from '../../data/products'; // Import sample products data
import Card from '../Card/Card';

const Search = () => {
  const [query, setQuery] = useState('');
  const [allergens, setAllergens] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('/search', { query, allergens });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <div>
        {/* Input fields and search button */}
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search query" />
        <input type="text" value={allergens} onChange={(e) => setAllergens(e.target.value)} placeholder="Allergens" />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {/* Display search results */}
        {searchResults.map((result, index) => (
          <Card key={index} title={result['Food Product']} allergens={result.Allergens} ingredients={result.Ingredients} />
        ))}

        {/* Display existing products */}
        {ProductsData.map((product, index) => (
          <Card key={index} title={product.name} allergens={product.allergens} ingredients={product.ingredients} />
        ))}
      </div>
    </div>
  );
};

export default Search;
