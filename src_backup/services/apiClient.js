const API_BASE = "https://api.yourbank.com"

export async function apiRequest(endpoint, options = {}) {

 const token = localStorage.getItem("token")

 const response = await fetch(`${API_BASE}${endpoint}`, {
  ...options,
  headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${token}`,
   ...options.headers
  }
 })

 if (!response.ok) {
  throw new Error("API request failed")
 }

 return response.json()

}