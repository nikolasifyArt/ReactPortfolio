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



/**
 * CSS Links
 */
import './index.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
