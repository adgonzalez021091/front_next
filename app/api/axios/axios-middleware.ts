
import axios from 'axios';
import { cookies } from 'next/headers'

const axiosInstance = axios.create({
    baseURL: "https://fotodeteccion-dev2.ansv.gov.co/api/",
    withCredentials: true,  // Ensure cookies are included in requests
});

axiosInstance.interceptors.request.use((config) => {
    const cookieStore = cookies()
  
    const token = cookieStore.get('jwt_token');
    const csrfToken = cookieStore.get('csrftoken');
    if (token) {
        console.log("token auth.....",token)
        config.headers['Authorization'] = `Bearer ${token.value}`;
    }
    if (csrfToken) {
        console.log("token csrf.....",csrfToken)
        config.headers['X-CSRFToken'] = csrfToken.value;
        config.headers['Host'] = "fotodeteccion-dev2.ansv.gov.co";
    }
    
    config.headers['Content-Type']= 'application/json';
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;