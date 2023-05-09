import {useState,useEffect} from 'react'
import {FaHome, FaTwitter} from "react-icons/fa";
import {ImProfile} from "react-icons/im";
import {FiDelete,FiActivity} from "react-icons/fi";
import axios from 'axios';

export default function Nav({apiKey}) {

  // const apiKey = '645669647213f63d430ce6ca';
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState([]);
  let username = user.name
  
  
  const fetchTweets = async () => {
    try {
      const response = await axios.get('https://react-workshop-todo.fly.dev/posts/my', {
        headers: { apiKey: apiKey },
      });
      
      setUser(response.data[0].user)

      setTweets(response.data);
    } catch (error) {
      console.log(error);
      setUser({name:"Invalid"})

      // Handle error
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);


  return (
    <>
    <div className="nav">
      <div className="accHome">

        <div className="mainname">{username}</div>
      </div>
      <div className="logo"  ><FaTwitter/></div>
      <div className="navItem"><FaHome/> <a href="/">Home</a> </div>
      <div className="navItem"><ImProfile/> <a href="/about"> About </a></div>
      <div className="navItem"><FiDelete/> <a href="/delete"> Delete Post </a></div>
      <div className="navItem"><FiActivity/> <a href="/login"> Login</a></div>
    </div>
    </>
  )
}
