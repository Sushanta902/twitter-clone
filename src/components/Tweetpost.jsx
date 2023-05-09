import React, { useState } from 'react';
import axios from 'axios';

export default function Tweetpost({ placeholder, setShouldRefresh , apiKey}) {
  const [tweetContent, setTweetContent] = useState('');
  // const apiKey = '645669647213f63d430ce6ca'


  const upload = async () => {
    try {
      await axios.post(
        'https://react-workshop-todo.fly.dev/posts/',
        {
          content: tweetContent.split('@')[0],
          image: tweetContent.split('@')[1],
        },
        {
          headers: { apiKey: apiKey },
        }
      );
      setTweetContent('');
      setShouldRefresh(true);
    } catch (error) {
      console.log(error);
      window.location.href = '/login';

    }
  };

const handleSubmit= ()=>{
    upload();
}

  return (
    <>
    
    <div className="tweetpost">
        
        <input className='postContainer' value={tweetContent} onChange={(e)=>setTweetContent(e.target.value)}    placeholder={placeholder} id="" rows="10"/>
        <button className='tweetBtn' onClick={()=>(handleSubmit())} >Tweet</button>
    </div>
    </>
  )
}

