import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const get = async (url: string) => {
  const response = await api.get(url)
  return response.data
}

export const post = async (url: string, data?: object) => {
  const response = await api.post(url, data)
  return response.data
}

export const put = async (url: string, data?: object) => {
  const response = await api.put(url, data)
  return response.data
}

export const del = async (url: string) => {
  const response = await api.delete(url)
  return response.data
}
