import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tweets from '../components/Tweets';
import Nav from '../components/Nav';
import Trend from '../components/Trend';

export default function About({apiKey}) {

  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [fullname, setFullname] = useState('');
  // const apiKey = '645669647213f63d430ce6ca';
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const response = await axios.get('https://react-workshop-todo.fly.dev/posts/my', {
        headers: { apiKey: apiKey },
      });
      setTweets(response.data);
      setFullname(response.data[0].user.fullname);
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };
  
  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);
console.log(fullname)
  return (
    <>

<div className="container">

  <Nav apiKey={apiKey} />

<div className="posts">

<div className="back"><a href="/">Back</a></div>
    <section class="about-section">
  <h2>About Me : {fullname}</h2>
  <p>Welcome to my About page! We're delighted to introduce ourselves and share a bit about who I am and my timeleine.</p>
  
    </section>
        {tweets.map((element) => (
          <Tweets
            apiKey={apiKey}
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

  <Trend apiKey={apiKey} />
</div>

    </>
  );
}




