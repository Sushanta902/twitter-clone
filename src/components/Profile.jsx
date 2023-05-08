import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tweets from '../components/Tweets';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Trend from './Trend';

export default function Profile() {
    const {id} = useParams()
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const apiKey = '645669647213f63d430ce6ca';
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const response = await axios.get(`https://react-workshop-todo.fly.dev/posts/profile/${id}`, {
        headers: { apiKey: apiKey },
      });
      setTweets(response.data);
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };
  
  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);
console.log(tweets)
  return (
    <>


    <div className="container">
    <Nav/>
      <div className="posts">
        {tweets.map((element) => (
          <Tweets
            key={element._id}
            id={element._id}
            setShouldRefresh={setShouldRefresh}
            name={element.user.name}
            data={element.content}
            img={element.image}
            avatar={'66668423'}
            date={element.createdAt}
            uid={element.user._id}
          />
        ))}
      </div>
<Trend/>   
    </div>
   
    </>
  );
}



