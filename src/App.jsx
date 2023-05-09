import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './components/Profile';
import Deletepost from './components/Deletepost';
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Singletweet from './components/Singletweet';
import Login from './pages/Login';

export default function App() {
let apiKey = "645669647213f63d430ce6ca"
localStorage.getItem('apiKey')


  return (
    <>
  <BrowserRouter>
  <Routes>
      <Route exact path="/" element={<Home apiKey={apiKey}/>}/>  
      <Route  path="/about" element={  <About apiKey={apiKey}/>}/>  
      <Route  path="/delete" element={  <Deletepost apiKey={apiKey}/>}/>  
      <Route  path="/login" element={  <Login apiKey={apiKey} />}/>  
      <Route path="/posts/:id" element={  <Singletweet apiKey={apiKey} />}/>  
      <Route path="/posts/profile/:id" element={  <Profile apiKey={apiKey} />}/>  
      
  </Routes>
  </BrowserRouter>

    </>
  )
}
