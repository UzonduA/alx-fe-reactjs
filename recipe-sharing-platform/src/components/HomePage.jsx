import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div
                key={recipe.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl hover:bg-gray-50 hover:scale-105 transition duration-300"
                >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-60 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl text-gray-600 font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
