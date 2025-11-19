import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Backbutton from"./Backbutton.jsx"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Backbutton /> 
    <App />
  </BrowserRouter>
);