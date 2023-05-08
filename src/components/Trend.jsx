import React from 'react'

export default function Trend() {
  return (
    <>
    <div className="trend">
      <div className="search"><input type="text" placeholder='🔍 Search Twitter'/></div>
      <div className="trendsList">
        <div className="head">Trends For You</div>
        <div className='trendItem'>IPL</div>
        <div className='trendItem'>GOG vol 3</div>
        <div className='trendItem'> Neplai</div>
      </div>

      <div className="trendsList">
        <div className="head">Who to follow</div>
        <div className='trendItem'>Balen Shah</div>
        <div className='trendItem'>Ravi Lamichanne</div>
        <div className='trendItem'> David J. Malan</div>
      </div>
    </div>
    </>
  )
}
