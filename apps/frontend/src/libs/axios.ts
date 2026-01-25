import type { AxiosError } from 'axios'

import Axios from 'axios'

import { KEY_ACCESS_TOKEN } from '@/constants/base'

const axios = Axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
})

axios.interceptors.request.use((config) => {
	const token = localStorage.getItem(KEY_ACCESS_TOKEN)
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

axios.interceptors.response.use(
	(res) => res,
	async (error: AxiosError | Error) => {
		return Promise.reject(error)
	},
)

export default axios
