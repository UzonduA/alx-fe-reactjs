import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search.jsx'
import UserCard from './components/UserCard'
import { searchUsers } from './services/github'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSearch(query) {
  setLoading(true)
  setError(null)
  try {
  const data = await searchUsers(query)
  setUsers(data.items || [])
  } catch (err) {
  
  console.error(err)
  setError(err.response?.data?.message || err.message || 'Request failed')
  } finally {
  setLoading(false)
  }
}

return (
    <>
    <div style={{ maxWidth: 980, margin: '40px auto', padding: '0 16px' }}>
    <h1>GitHub User Search</h1>

    <Search onSearch={handleSearch} />

    {loading && <p>Loading...</p>}
    {error && <p style={{ color: 'crimson' }}>{error}</p>}

      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 12 }}>
        {users.map(u => (
          <UserCard key={u.id} user={u} />
        ))}
      </div>
      
      {users.length === 0 && !loading && <p style={{ color: '#666', marginTop: 12 }}>No results yet. Try searching for a username.</p>}
  </div>

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
    </>
  )
}

export default App
