import React from 'react';
import Ingredients from './Ingredients';

const Recipe = ({ recipe }) => {
  const {
    recipe: { calories, image, label, ingredients }
  } = recipe;

  return (
    <div className="recipe">
      <h1>{label}</h1>
      <Ingredients ingredients={ingredients} />
      <p>Calories {calories}</p>
      <img src={image} alt={label} />
    </div>
  );
};

export default Recipe;
