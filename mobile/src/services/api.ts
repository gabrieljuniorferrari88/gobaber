import axios from 'axios'

const api = axios.create({
  // colocar o servidor do expo 192.168.0.107 + a porta do backend :3333
  baseURL: 'http://192.168.0.107:3333',
})

export { api }
