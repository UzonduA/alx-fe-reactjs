import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList.jsx'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails.jsx';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <h1>Recipe Sharing App</h1>
        
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
              <FavoritesList />
              <RecommendationsList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
      </Router>
    </>
  );

}
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
};
export default App
