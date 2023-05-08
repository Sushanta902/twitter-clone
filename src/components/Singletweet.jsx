import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import axios from 'axios'
import { FaBackward} from "react-icons/fa";


export default function Singletweet() {
    const {id} = useParams()
    const [tweets,setTweets] =useState('')
    const [tweetsUser,setTweetsUser] =useState('')

        const fetchTweets = async () =>
         {
           const posts = await axios.get(`https://react-workshop-todo.fly.dev/posts/${id}`,{headers:{apiKey:"645669647213f63d430ce6ca"}});
           setTweets(posts.data.post)
           setTweetsUser(posts.data.post.user)
         } 
         useEffect(()=>{
           fetchTweets();
     },[])
  const name = tweetsUser.name;
  const gitid = tweetsUser.githubId;

  const [postId, setPostId] = useState('');
  const handleDelete = async () => {
    try {
      await axios.delete(`https://react-workshop-todo.fly.dev/posts/${id}`, {
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

 


console.log(tweets)
  return (


    <>
        <div className="back"><a href="/"> <FaBackward/> </a>  </div>
        <div className="delete"  onClick={handleDelete} >Delete Post  </div>
        <div className="tweets">
            <div className="accountpp" onClick={()=>{window.location.href=`https://github.com/${name}`}}><img src={`https://avatars.githubusercontent.com/u/${gitid}?v=4`}/></div>
            <div className="tweetBody">
                <div className="tweetUser">{name}</div> 
                <div className="tweetContent">{tweets.content}</div>
                <div className="tweetImg"><img src={tweets.image} /></div>
            </div>
        </div>
  

        <Comment id={id} name ={name}></Comment>
    </>


  )
}
