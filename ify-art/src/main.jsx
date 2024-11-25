/** @copyright 20024 ifyart
 *  license: Apache License 2.0
 * */ 
/**
 * Node modules
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Components
 * 
 */
import { App } from './App.jsx'
import tailwindScrollbar from 'tailwind-scrollbar'


/**
 * CSS Links
 */
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <tailwindScrollbar
    <App />
  </StrictMode>,
)
