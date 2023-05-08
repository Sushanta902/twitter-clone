import {useState,useEffect} from 'react'
import axios from 'axios';
export default function Tweetpost() {

    const [tweetContent,setTweetContent] = useState([''])
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const upload = async() =>{
      try{
          await axios.post("https://react-workshop-todo.fly.dev/posts/",{
            content: tweetContent,
            image: 'https://qph.cf2.quoracdn.net/main-qimg-c1c0b1d2e6aaeda43827d138e5964008'
          },
          {
            headers:{apiKey:'645669647213f63d430ce6ca'}
          }
          
          )
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

  return (
    <>
    
    <div className="tweetpost">
        
        <input className='postContainer' value={tweetContent} onChange={(e)=>setTweetContent(e.target.value)}    placeholder='What is happeneing?' id="" rows="10"/>
        <button className='tweetBtn' onClick={()=>(handleSubmit())} >Tweet</button>
    </div>
    </>
  )
}
