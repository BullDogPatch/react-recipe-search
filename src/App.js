import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID = 'fb1589bc';
  const API_KEY = 'eed51fdc12bbb68c6ddeb2a2bef91fb3';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const getSeacrh = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  const seachUpdate = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <div className="App">
      <form onSubmit={getSeacrh} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={seachUpdate}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {/* <Recipe /> */}
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            recipe={recipe}
            key={index}
            // ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
