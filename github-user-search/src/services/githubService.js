import axios from 'axios'

const API_BASE = 'https://api.github.com/users/'

export async function fetchUserData(username) {
try {
    const res = await axios.get(`${API_BASE}${encodeURIComponent(username)}`)
    return res.data
} catch (error) {
    throw error
}
}

export async function fetchAdvancedUsers({ username, location, minRepos, page = 1 }) {
    try {
        let query = []
        if (username) query.push(`${username} in:login`)
        if (location) query += `+location:${location}`
        if (minRepos) query += `+repos:>=${minRepos}`

        const res = await axios.get("https://api.github.com/search/users?q", {
            params: {
                q: query,
                per_page: 20,
                page
            }
        })
        return res.data
    }   catch (error) {
        throw error
    }
}