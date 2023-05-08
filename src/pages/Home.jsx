import React from 'react'
import Nav from '../components/Nav'
import Posts from '../components/Posts'
import Trend from '../components/Trend'

export default function Home() {
  return (
    <>
    <div className="container">
        <Nav/>
        <Posts/>
        <Trend/>
    </div>
    </>
  )
}
