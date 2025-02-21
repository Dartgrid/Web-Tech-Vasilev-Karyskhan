import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Blog from './pages/Blog'

function App() {

  return (
    <>
      <div className='bg-red-500 text-2xl'>
        <Header />
      </div>
      <div className='bg-green-500 text-xl'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
      </div>
      
      <div className='bg-blue-500 text-lg'>
      <Footer />
      </div>
      
    </>
  )
}

export default App
