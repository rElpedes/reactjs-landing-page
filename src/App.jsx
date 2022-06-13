import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Error from './components/Error'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={[ <Showcase />, <Banner /> ]} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
