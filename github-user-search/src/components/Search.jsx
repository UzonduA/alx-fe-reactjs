import React, { useState } from 'react'
import { fetchUserData } from '../services/githubService'

export default function Search() {
    const [username, setUsername] = useState('')
    const [location, setLocation] = useState('')
    const [minRepos, setMinRepos] = useState('')
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

async function handleSubmit(e) {
    e.preventDefault()
    if (!username.trim()) return
    setLoading(true)
    setError(null)
    setUser(null)

try {
    const data = await fetchUserData(username.trim())
    setUser(data)
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
            style={{ flex: 1, padding: '8px 10px' }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>Search</button>
    </form>


{loading && <p>Loading...</p>}
{error && <p style={{ color: 'crimson' }}>{error}</p>}


{user && (
<div style={{ display: 'flex', gap: 16, alignItems: 'center', border: '1px solid #ddd', padding: 16, borderRadius: 8 }}>
<img
src={user.avatar_url}
alt={`${user.login} avatar`}
width={80}
height={80}
style={{ borderRadius: '50%' }}
/>
<div>
<h2 style={{ margin: '0 0 8px' }}>{user.login}</h2>
<a href={user.html_url} target="_blank" rel="noopener noreferrer">
Visit Profile
</a>
</div>
</div>
)}
</div>
)
}