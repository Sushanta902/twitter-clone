import {useState,useEffect} from 'react'
import axios from 'axios';
import CommentData from './CommentData';

export default function Comment({id}) {
    const [tweetContent,setTweetContent] = useState([''])
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const upload = async() =>{
      try{
          await axios.post(`https://react-workshop-todo.fly.dev/posts/${id}/comments`, {
            content: tweetContent,
        }, {
          headers: {
            apiKey: "645669647213f63d430ce6ca"
          },
        });
          
          
          setTweetContent("");
          setShouldRefresh((v) => !v)
        }
     catch (e) {
        console.log(e);
        alert("Error Found ")
      }
  }

  const handleSubmit=() => (
    upload()
  )

  const apiKey = "645669647213f63d430ce6ca"
const [comment,setComments] = useState([])
useEffect(()=>{

},[])
      
const fetchComment = async () =>
{
    const posts = await axios.get (`https://react-workshop-todo.fly.dev/posts/${id}`,{headers:{apiKey:apiKey}});
    setComments(posts.data.post.comments)
} 

    useEffect(()=>{
    fetchComment();
},[])
console.log(comment.comments)
  return (
    <>
    <div className="comment">
    <div className="commentHandel">

        <div className="comment"><input value={tweetContent} onChange={(e)=>setTweetContent(e.target.value)}  placeholder='Comment' type="text" /></div>
        <div className="btn" onClick={()=>(handleSubmit())} >✔️</div>
    </div>

    {
        comment.map(element=>(
            <CommentData gitid={element.user.githubId} name={element.user.name} content={element.content} />

        ))
    }
    </div></>
  )
}
