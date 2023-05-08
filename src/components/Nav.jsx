import React from 'react'
import { FaHome, FaTwitter} from "react-icons/fa";
import { ImProfile} from "react-icons/im";

export default function Nav() {
  return (
    <>
    <div className="nav">
      <div className="logo"  ><FaTwitter/></div>
      <div className="navItem"><FaHome/> <a href="/">Home</a> </div>
      <div className="navItem"><ImProfile/> <a href="/about"> About </a></div>
    </div>
    </>
  )
}
