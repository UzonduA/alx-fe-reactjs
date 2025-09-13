import { create } from 'zustand'

export const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({
    recipes: [...state.recipes, newRecipe],
  })),
   
  updateRecipe:(updatedRecipe) =>
    set((state) => ({
       recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) =>({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),

    })),

  setRecipes: (recipes) => set({ recipes }),

  searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],
  generateRecommendations: () =>
    set((state) => {

      const recommended = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id)
      );
      return { recommendations: recommended.slice(0, 5) };
    }),
}));
  