import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://work-experience-api.herokuapp.com/v1'
})
