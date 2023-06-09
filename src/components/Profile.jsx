import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tweets from '../components/Tweets';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import Trend from './Trend';

export default function Profile({apiKey}) {
    const {id} = useParams()
  const [shouldRefresh, setShouldRefresh] = useState(false);
  // const apiKey = '645669647213f63d430ce6ca';
  const [tweets, setTweets] = useState([]);
  const [alltweets, allsetTweets] = useState([]);
  let username = 'username';

  const fetchTweets = async () => {
    try {

      const response = await axios.get(`https://react-workshop-todo.fly.dev/posts/profile/${id}`, {
        headers: { apiKey: apiKey },
      });
      setTweets(response.data);
      allsetTweets(response.data[0].user);
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };
  
  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);

username = alltweets.name
let gitid = "6666d6"
gitid = (alltweets.githubId)


  return (
    <>


    <div className="container">
        
    <Nav apiKey={apiKey} />
    
      <div className="posts">
      <h1 style={{textAlign:"center",margin:"20px"}}>{username}</h1>
        {tweets.map((element) => (
          <Tweets
            apiKey={apiKey}
            key={element._id}
            id={element._id}
            setShouldRefresh={setShouldRefresh}
            name={element.user.name}
            data={element.content}
            img={element.image}
            avatar={gitid}
            date={element.createdAt}
            uid={element.user._id}
          />
        ))}
      </div>
<Trend apiKey={apiKey}/>   
    </div>
   
    </>
  );
}



