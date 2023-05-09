import React from 'react'
import Nav from '../components/Nav'
import Posts from '../components/Posts'
import Trend from '../components/Trend'

export default function Home({apiKey}) {
  return (
    <>
    <div className="container">
        <Nav apiKey={apiKey}/>
        <Posts apiKey={apiKey} />
        <Trend apiKey={apiKey} />
    </div>
    </>
  )
}
