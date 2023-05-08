import React from 'react'

export default function Trend() {
  return (
    <>
    <div className="trend">
      <div className="search"><input type="text" placeholder='🔍 Search Twitter'/></div>
      <div className="trendsList">
        <div className="head">Trends For You</div>

        <a href="https://twitter.com/explore" target='_blank'><div className='trendItem'> IPL</div></a>
        <a href="https://twitter.com/explore" target='_blank'><div className='trendItem'> GOG vol 3</div></a>
        <a href="https://twitter.com/explore" target='_blank'><div className='trendItem'> Neplai</div></a>
      </div>

      <div className="trendsList">
        <div className="head" >Who to follow</div>
        <a href="https://twitter.com/ShahBalen" target='_blank'><div className='trendItem'> Balen Shah </div></a>
        <a href="https://twitter.com/hamrorabi" target='_blank'> <div className='trendItem'>Ravi Lamichanne</div></a>
        <a href="https://twitter.com/davidjmalan" target='_blank'> <div className='trendItem'> David J. Malan</div></a>
      </div>
    </div>
    </>
  )
}
