import type { AxiosError } from 'axios'

import Axios from 'axios'

const httpService = Axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
	withCredentials: true,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
})

httpService.interceptors.response.use(
	(res) => res,
	async (error: AxiosError | Error) => {
		return Promise.reject(error)
	},
)

export default httpService
