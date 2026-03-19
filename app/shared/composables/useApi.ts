import axios from 'axios'

export function useApi() {
    const config = useRuntimeConfig()

    const api = axios.create({
        baseURL: config.public.apiUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // добавляем токен к каждому запросу
    api.interceptors.request.use((config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    })

    return { api }
}