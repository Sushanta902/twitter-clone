import React, { useState } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';
import Trend from '../components/Trend';
export default function Login({apiKey}) {
  const [postId, setPostId] = useState('');
//   const apiKey = '645669647213f63d430ce6ca'

  const handleStore = async () => {
    try {
        localStorage.setItem("apiKey",postId)
      setPostId('');
      window.location.href = '/';

        
    } catch (error) {
      console.error('Error loging :', error);
   
    }
  };

  return (

    <div className="container">
      <Nav apiKey={apiKey} ></Nav>
    <div className="deletepost">
      <div className="container">
        <input
          type="text"
          className="field"
          placeholder="Enter your api key"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button className="primary-btn" onClick={handleStore}>
          Login
        </button>
      </div>
    </div>
    <Trend apiKey={apiKey} ></Trend>
    </div>
  );
}
