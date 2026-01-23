/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly NODE_ENV: string
	readonly VITE_ONCHAINKIT_API_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
