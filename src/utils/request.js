import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:8090',
    timeout: 5000
})
instance.interceptors.request.use()
instance.interceptors.response.use()

export default instance;