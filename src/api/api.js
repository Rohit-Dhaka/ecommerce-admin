import axios from 'axios'

export const baseUrl = axios.create({
    baseURL :'http://localhost:4000/api/v1/'
    // baseURL :'https://ecommerce-backend-nlk4.onrender.com/api/v1'
})
