

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signin from './pages/Signin'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Login />}/>
      <Route  path='/signin' element={<Signin />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
