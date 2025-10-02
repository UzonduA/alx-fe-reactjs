import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';


const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
  const foundRecipe = recipeData.find(r => r.id === parseInt(id));
  setRecipe(foundRecipe);
    }, [id]);

  if (!recipe) {
  return <div className="p-4 text-center text-gray-400">Loading recipe...</div>;
  }


  if (!recipe) {
    return <div className="p-4 text-center text-red-600">Recipe not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4  text-green-600">{recipe.title}</h1>
      <p className="mb-6 text-white">{recipe.summary}</p>

      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2 text-green-600">🧂 Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-2 text-green-600">👨‍🍳 Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-white">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
