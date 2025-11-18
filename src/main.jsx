import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from"./Navbar.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar /> 
    <App />
  </BrowserRouter>
);