import axios from 'axios'

const request = axios.create({
  baseURL: 'http://iwenwiki.com:3000'
})

export default request