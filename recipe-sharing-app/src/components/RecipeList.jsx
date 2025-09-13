import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>        {recipes.map(recipe => (
          <div key={recipe.id}  style={{ border: '1px solid #3f3c3cff', margin: '8px 0', padding: '8px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>

            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        ))}
      </div>
    );
  };

  
  export default RecipeList;