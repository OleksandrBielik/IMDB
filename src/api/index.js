import axios from 'axios';

const defaultConfig = {
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
}

const LoginConfig = {
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
}

export const DefaultAPIInstance = axios.create(defaultConfig)
export const LoginAPIInstance = axios.create(LoginConfig)