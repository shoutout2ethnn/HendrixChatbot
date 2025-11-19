import { Route, Routes } from 'react-router' 
import Home from './Home.jsx'
import Chatpage from './ChatPage.jsx'
import './App.css'
function App() {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/chat" element={<Chatpage/>}/>

    </Routes>
    
  )
}

export default App
