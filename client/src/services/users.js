import axios from 'axios'
import jwtDecode from 'jwt-decode'

const apiUrl = process.env.REACT_APP_API_URL

export const register = data => axios.post(`${apiUrl}/api/users`, data)

export const login = data => axios.post(`${apiUrl}/api/auth`, data)

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem('token')
    const { name } = jwtDecode(token)
    return name
  } catch (error) {
    return null
  }
}

export const logout = () => localStorage.removeItem('token')
