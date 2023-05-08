import React, { useState } from 'react';
import axios from 'axios';


export default function Deletepost() {
  const [postId, setPostId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`https://react-workshop-todo.fly.dev/posts/${postId}`, {
        headers: {
          apiKey: '645669647213f63d430ce6ca', 
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
  );
}
