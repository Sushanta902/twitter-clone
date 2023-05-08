import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './components/Profile';
import Deletepost from './components/Deletepost';
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Singletweet from './components/Singletweet';

export default function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
      <Route exact path="/" element={<Home/>}/>  
      <Route  path="/about" element={  <About/>}/>  
      <Route  path="/delete" element={  <Deletepost/>}/>  
      <Route path="/posts/:id" element={  <Singletweet/>}/>  
      <Route path="/posts/profile/:id" element={  <Profile/>}/>  
      
  </Routes>
  </BrowserRouter>

    </>
  )
}
