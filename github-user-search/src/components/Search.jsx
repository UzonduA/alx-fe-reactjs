import React, { useState } from 'react'
import { fetchUserData } from '../services/githubService'

export default function Search() {
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [minRepos, setMinRepos] = useState('')
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

async function handleSubmit(e) {
    e.preventDefault()
    if (!username.trim()) return
    setLoading(true)
    setError(null)
    setUser([])

try {
    const data = await fetchAdvancedUsers(username.trim(), location.trim(), minRepos.trim())
    setUser(data.items || [])
} catch (err) {
    setError('Looks like we cant find the user')
} finally {
    setLoading(false)
}
}

return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>

    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded"
            style={{ flex: 1, padding: '8px 10px' }}
        />
        <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border rounded"
            style={{ flex: 1, padding: '8px 10px' }}
        />
        <input
            type="number"
            placeholder="Minimum repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="p-2 border rounded"
            style={{ flex: 1, padding: '8px 10px' }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
    </form>


    {loading && <p>Loading...</p>}
    {error && <p style={{ color: 'crimson' }}>{error}</p>}


    {users.length >0 && (
        <div className="grid gap-4">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="flex items-center gap-4 border border-gray-300 p-4 rounded-lg shadow-sm"
                    >
                    <img
                        src={users.avatar_url}
                        alt={`${users.login} avatar`}
                        width={80}
                        height={80}
                        style={{ borderRadius: '50%' }}
                    />
                    <div>
                        <h2 className="text-lg font-semibold">{user.login}</h2>
                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    
                        Visit Profile
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )}
    </div>
    )

}