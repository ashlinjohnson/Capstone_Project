const USERS_KEY = "users"
const CURRENT_USER_KEY = "currentUser"

export const getUsers = () => {
  return JSON.parse(localStorage.getItem(USERS_KEY)) || []
}

export const registerUser = (userData) => {

  const users = getUsers()

  const newUser = {
    id: Date.now(),
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
    securityQuestion: userData.securityQuestion,
    securityAnswer: userData.securityAnswer,
    address: {
      street1: userData.street1,
      street2: userData.street2,
      city: userData.city,
      county: userData.county,
      zip: userData.zip,
      country: userData.country
    }
  }

  users.push(newUser)

  localStorage.setItem(USERS_KEY, JSON.stringify(users))

  return newUser
}

export const loginUser = (email,password) => {

  const users = getUsers()

  const user = users.find(
    (u)=>u.email === email && u.password === password
  )

  if(!user) return null

  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))

  return user
}

export const logoutUser = () => {
  localStorage.removeItem(CURRENT_USER_KEY)
}

export const getUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER_KEY))
}

export const isAuthenticated = () => {
  return !!localStorage.getItem(CURRENT_USER_KEY)
}