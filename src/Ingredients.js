import React from 'react';

const Ingredients = ({ ingredients }) => {
  return (
    <ul style={listStyles}>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient.text}</li>
      ))}
    </ul>
  );
};

const listStyles = {
  listStyle: 'none'
};

export default Ingredients;
