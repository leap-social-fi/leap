import { createRoot } from 'react-dom/client'

import App from './app'
import './assets/styles/global.css'

const root = document.getElementById('root')!
createRoot(root).render(<App />)
