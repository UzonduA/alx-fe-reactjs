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