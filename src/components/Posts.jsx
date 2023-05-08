import {useState,useEffect} from 'react'
import Tweetpost from './Tweetpost'
import Tweets from './Tweets'
import axios from 'axios'

export default function Posts() {   
const [shouldRefresh,setShouldRefresh] = useState(false);
const apiKey = "645669647213f63d430ce6ca"
const [tweets,setTweets] = useState([])
useEffect(()=>{

},[])
      
const fetchTweets = async () =>
{
    const posts = await axios.get ("https://react-workshop-todo.fly.dev/posts/all",{headers:{apiKey:apiKey}});
    setTweets(posts.data)
} 

    useEffect(()=>{
    fetchTweets();
},[])
console.log(tweets)
  return (
    <>   
     <div className="posts">
       <Tweetpost/>
       {
        tweets.map(element => (
        <Tweets key={element._id} id={element._id} setShouldRefresh={setShouldRefresh} name = {element.user.name} data={element.content} img={element.image} avatar={element.user.githubId} date = {element.createdAt} />
        ))
        }
    </div>
    </>

  )
}
