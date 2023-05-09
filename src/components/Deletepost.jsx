import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Trend from './Trend';

export default function Deletepost({apiKey}) {
  const [postId, setPostId] = useState('');
  // const apiKey = '645669647213f63d430ce6ca'


  const handleDelete = async () => {
    try {
      await axios.delete(`https://react-workshop-todo.fly.dev/posts/${postId}`, {
        headers: {
          apiKey: apiKey, 
        },
      });

      console.log('Post deleted successfully');

      setPostId('');
      window.location.href = '/';
    } catch (error) {
      console.error('Error deleting post:', error);
   
    }
  };

  return (

    <div className="container">
      <Nav apiKey={apiKey}/>
    <div className="deletepost">
      <div className="container">
        <input
          type="text"
          className="field"
          placeholder="Id of post to remove"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
    <Trend apiKey={apiKey} />
    </div>
  );
}
