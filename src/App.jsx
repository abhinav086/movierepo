import React from 'react'
import Home from './Home'
import Header from './Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Mainpage from './Mainpage'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/moviepage' element={<Home/>} />
        <Route path='/' element={<Mainpage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
