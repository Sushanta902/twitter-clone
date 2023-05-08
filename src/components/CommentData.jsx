export default function CommentData({content,name,gitid,uid}) {

  return (
    <>
    <div className="commentContent">
         <div className="pp"> <img onClick={()=>{window.location.href=`/posts/profile/${uid}`}} src={`https://avatars.githubusercontent.com/u/${gitid}?v=4`} />{name}</div>
        <div className="cmt"> {content} </div>
    </div>
</>
  )
}
