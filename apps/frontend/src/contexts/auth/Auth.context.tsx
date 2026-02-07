import type { MeResponse } from '@leap/shared/schema/auth'

import {
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { useConnection } from 'wagmi'

import { useAuthMe } from '@/modules/auth/hooks/queries'

export type StatusAuthType = 'disconnect' | 'loading' | 'connect'

export interface AuthContextType extends MeResponse {
	verifySignStatus: StatusAuthType
	connectWalletStatus: StatusAuthType
	setAuth: Dispatch<SetStateAction<MeResponse>>
	setVerifySignStatus: Dispatch<SetStateAction<StatusAuthType>>
	setConnectWalletStatus: Dispatch<SetStateAction<StatusAuthType>>
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: PropsWithChildren) => {
	const [auth, setAuth] = useState<MeResponse>({
		id: 0n,
		address: '',
		name: '',
		username: '',
		avatar: '',
	})
	const [verifySignStatus, setVerifySignStatus] =
		useState<StatusAuthType>('disconnect')
	const [connectWalletStatus, setConnectWalletStatus] =
		useState<StatusAuthType>('disconnect')
	const { isConnected } = useConnection()
	const { data, error, isSuccess } = useAuthMe({
		queryKey: ['me'],
		enabled: isConnected,
		retry: false,
	})

	const authContextValue = useMemo(
		() => ({
			...auth,
			verifySignStatus,
			connectWalletStatus,
			setConnectWalletStatus,
			setVerifySignStatus,
			setAuth,
		}),
		[auth, connectWalletStatus, verifySignStatus],
	)

	useEffect(() => {
		if (data?.data) {
			setAuth({ ...data.data })
		}
	}, [data])

	useEffect(() => {
		if (error?.status) {
			setVerifySignStatus('disconnect')
			return
		}
		if (isSuccess) {
			setVerifySignStatus('connect')
			return
		}
	}, [error?.status, isSuccess])

	useEffect(() => {
		if (isConnected) {
			setConnectWalletStatus('connect')
		}
	}, [isConnected])

	return (
		<AuthContext.Provider value={authContextValue}>
			{children}
		</AuthContext.Provider>
	)
}

const useAuthContext = () => {
	const context = useContext(AuthContext)

	if (!context) {
		return {} as AuthContextType
	}

	return context
}

export { AuthProvider, useAuthContext }
