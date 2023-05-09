import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentData from './CommentData';

export default function Comment({ id,apiKey }) {
  const [tweetContent, setTweetContent] = useState('');
  const [comments, setComments] = useState([]);
  // const apiKey = '645669647213f63d430ce6ca'


  const upload = async () => {
    try {
      await axios.post(
        `https://react-workshop-todo.fly.dev/posts/${id}/comments`,
        {
          content: tweetContent,
        },
        {
          headers: {
            apiKey: apiKey,
          },
        }
      );

      setTweetContent('');
      fetchComments(); // Fetch comments again after posting a new comment
    } catch (error) {
      console.log(error);
      alert('Error Found');
    }
  };

  const fetchComments = async () => {
    try {
      const response = await axios.get(`https://react-workshop-todo.fly.dev/posts/${id}`, {
        headers: {
          apiKey: '645669647213f63d430ce6ca',
        },
      });
      setComments(response.data.post.comments.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = () => {
    upload();
  };

  return (
    <>
      <div className="comment">
        <div className="commentHandel">
          <div className="comment">
            <input
              value={tweetContent}
              onChange={(e) => setTweetContent(e.target.value)}
              placeholder="Comment"
              type="text"
            />
          </div>
          <div className="btn" onClick={handleSubmit}>
            ✔️
          </div>
        </div>

        {comments.map((element) => (
          <CommentData
            key={element._id}
            gitid={element.user.githubId}
            name={element.user.name}
            content={element.content}
            uid={element.user._id}
          />
        ))}
      </div>
    </>
  );
}
