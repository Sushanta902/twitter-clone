import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tweets from '../components/Tweets';

export default function About() {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const apiKey = '645669647213f63d430ce6ca';
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    try {
      const response = await axios.get('https://react-workshop-todo.fly.dev/posts/my', {
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

<div className="back"><a href="/">Back</a></div>
    <section class="about-section">
  <h2>About Me : Sushanta Neupane</h2>
  <p>Welcome to our About page! We're delighted to introduce ourselves and share a bit about who we are, what we do, and what we stand for.</p>
  <h3>Twitter-clone</h3>
  <p>We are <span class="company-name">[myTwitter]</span>, a dynamic and innovative <span class="company-industry">[industry]</span>  committed to <span class="company-mission">[core mission]</span>.</p>
</section>
<br />
<br />
<h1>My Posts</h1>

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
          />
        ))}
      </div>
    </>
  );
}




// import React from 'react'

// export default function About() {

  
//   return (
//     <>
//     <div className="back"><a href="/">Back</a></div>
//     <section class="about-section">
//   <h2>About Me : Sushanta Neupane</h2>
//   <p>Welcome to our About page! We're delighted to introduce ourselves and share a bit about who we are, what we do, and what we stand for.</p>
//   <h3>Twitter-clone</h3>
//   <p>We are <span class="company-name">[myTwitter]</span>, a dynamic and innovative <span class="company-industry">[industry]</span>  committed to <span class="company-mission">[core mission]</span>.</p>
// </section>

//     </>
//   )
// }
