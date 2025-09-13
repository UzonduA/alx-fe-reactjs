import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import { Link } from 'react-router-dom'; 

  const RecipeList = () => {
    const recipes = useRecipeStore((state) =>
         state.filteredRecipes.length > 0 ? state.filteredRecipes : state.recipes
    );

    return (
      <div>        {recipes.map(recipe => (
          <div key={recipe.id}  style={{ border: '1px solid #3f3c3cff', margin: '8px 0', padding: '8px' }}>
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>

            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        ))}
      </div>
    );
  };

  
  export default RecipeList;