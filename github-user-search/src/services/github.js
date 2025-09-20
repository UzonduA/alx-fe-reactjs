import axios from 'axios'

const API_BASE = 'https://api.github.com'
const token = import.meta.env.VITE_APP_GITHUB_API_KEY || ''

const api = axios.create({
baseURL: API_BASE,
headers: token ? { Authorization: `token ${token}` } : {}
})

export async function searchUsers(query, per_page = 12) {
if (!query) return { items: [] }
const res = await api.get('/search/users', {
params: { q: query, per_page }
})
return res.data 
}

export async function getUser(username) {
const res = await api.get(`/users/${encodeURIComponent(username)}`)
return res.data
}