import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Singletweet from './components/Singletweet';

export default function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home/>}/>  
      <Route path="/about" element={  <About/>}/>  
      <Route path="/posts/:id" element={  <Singletweet/>}/>  
      
  </Routes>
  </BrowserRouter>

    </>
  )
}
