import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const recipes = useRecipeStore((state) => state.recipes); 

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, recipes, filterRecipes]);
  
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{border: '1px solid crimson', color: 'white', background: 'black'}}
    />
  );
};

export default SearchBar;
