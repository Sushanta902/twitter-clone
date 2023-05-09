import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tweetpost from './Tweetpost';
import Tweets from './Tweets';

export default function Posts({apiKey}) {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [errorMsg, setErrormsg] = useState('What is happening? content@imagelink');
  let placeholder = errorMsg

  // const apiKey = '645669647213f63d430ce6ca';
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const response = await axios.get('https://react-workshop-todo.fly.dev/posts/all', {
        headers: { apiKey: apiKey },
      });
  console.log(response)

      setTweets(response.data);
    } catch (error) {
      setErrormsg("Make sure you have enter right api key ")
      console.log(error);
      // Handle error
    }
  };

  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);

  return (
    <>
      <div className="posts">
        <Tweetpost apiKey={apiKey} placeholder={placeholder} setShouldRefresh={setShouldRefresh} />
        {tweets.map((element) => (
          <Tweets
            key={element._id}
            id={element._id}
            setShouldRefresh={setShouldRefresh}
            name={element.user.name}
            data={element.content}
            img={element.image}
            avatar={element.user.githubId}
            date={element.createdAt}
            uid = {element.user._id}
          />
        ))}
      </div>
    </>
  );
}
