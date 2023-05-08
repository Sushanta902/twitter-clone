import React, { useState } from 'react';
import axios from 'axios';

export default function Tweetpost({ setShouldRefresh }) {
  const [tweetContent, setTweetContent] = useState('');

  const upload = async () => {
    try {
      await axios.post(
        'https://react-workshop-todo.fly.dev/posts/',
        {
          content: tweetContent,
          image: 'https://cdn.pixabay.com/photo/2022/06/12/22/48/gradient-7258997_960_720.png',
        },
        {
          headers: { apiKey: '645669647213f63d430ce6ca' },
        }
      );
      setTweetContent('');
      setShouldRefresh(true);
    } catch (error) {
      console.log(error);
      alert('Error Found');
    }
  };

const handleSubmit= ()=>{
    upload();
}

  return (
    <>
    
    <div className="tweetpost">
        
        <input className='postContainer' value={tweetContent} onChange={(e)=>setTweetContent(e.target.value)}    placeholder='What is happeneing?' id="" rows="10"/>
        <button className='tweetBtn' onClick={()=>(handleSubmit())} >Tweet</button>
    </div>
    </>
  )
}

