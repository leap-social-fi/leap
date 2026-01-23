/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly NODE_ENV: string
	readonly VITE_ONCHAINKIT_API_KEY: string
	readonly VITE_PRIVY_APP_ID: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
