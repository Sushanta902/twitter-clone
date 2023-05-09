import {useState} from 'react'
import { FaComment,FaEye,FaHeart,FaTwitter,FaShareSquare,FaRetweet } from "react-icons/fa";

export default function Tweets({name,data,img,avatar,date,id,uid}) {
  const [like,setLike] = useState(false)
  const toggleLike = like?"like":"unlike";
  const toggle = () =>{
    setLike(!like)
  }
  return (
    <>
    <div className="tweets">
        <div className="accountpp" onClick={()=>{window.location.href=`/posts/profile/${uid}`}} ><img  src={`https://avatars.githubusercontent.com/u/${avatar}?v=4`}/></div>
        <div className="tweetBody">
            <div className="tweetUser">{name}</div> 
            <div className="tweetContent">{data}</div>
            <div onClick={()=>{window.location.href=`/posts/${id}`}} className="tweetImg"><img src={img} /></div>
            <div className="reaction">
                <div className="rxn comment" ><a href={`/posts/${id}`}><FaComment/></a> </div>
                <div onClick={toggle} className={`rxn ${toggleLike}`}><FaHeart/></div>
                <div className="rxn comment"><FaRetweet/></div>
                <div className="rxn views"><FaEye/></div>
                <div className="rxn share"><FaShareSquare/></div>
            </div>
        </div>
        
        
    </div>
    </>
  )
}
