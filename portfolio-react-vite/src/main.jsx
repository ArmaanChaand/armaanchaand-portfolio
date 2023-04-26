import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AnimProvider } from './context/AnimationContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimProvider>
        <App />
    </AnimProvider>
  </React.StrictMode>,
)
