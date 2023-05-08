export default function CommentData({content,name,gitid}) {

  return (
    <>
    <div className="commentContent">
        <div className="pp"><img src={`https://avatars.githubusercontent.com/u/${gitid}?v=4`} />{name}</div>
        <div className="cmt"> {content} </div>
    </div>
</>
  )
}
