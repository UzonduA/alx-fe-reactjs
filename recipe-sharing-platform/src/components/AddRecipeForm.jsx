import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!title.trim()) validationErrors.title = 'Title is required.';
    if (!ingredients.trim()) {
      validationErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split(',').filter(i => i.trim()).length < 2) {
      validationErrors.ingredients = 'Please list at least two ingredients, separated by commas.';
    }
    if (!instructions.trim()) validationErrors.instructions = 'Preparation steps are required.';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredients.split(',').map(i => i.trim()),
      instructions: instructions.split('\n').map(step => step.trim()).filter(Boolean),
    };
    console.log('New Recipe Submitted:', newRecipe);

    setTitle('');
    setIngredients('');
    setInstructions('');
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-600">Add New Recipe</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block mb-1 font-semibold text-gray-600">Recipe Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-600 mt-1 text-sm">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="ingredients" className="block mb-1 font-semibold text-gray-600">
          Ingredients (separate with commas)
        </label>
        <textarea
          id="ingredients"
          rows="4"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
            errors.ingredients ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="e.g. flour, sugar, eggs"
        />
        {errors.ingredients && <p className="text-red-600 mt-1 text-sm">{errors.ingredients}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="instructions" className="block mb-1 font-semibold text-gray-600">
          Preparation Steps (one step per line)
        </label>
        <textarea
          id="instructions"
          rows="6"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
            errors.instructions ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Step 1&#10;Step 2&#10;Step 3"
        />
        {errors.instructions && <p className="text-red-600 mt-1 text-sm">{errors.instructions}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition duration-300"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
