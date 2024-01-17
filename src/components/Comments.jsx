/* eslint-disable react/prop-types */
import { useState } from "react";
// import Reply from "./Reply";

function Comments({ text, author, image, time, renderReplies, replies }) {
  const [voteCount, setVoteCount] = useState(0);

  function handleUpvote() {
    setVoteCount(voteCount + 1);
  }

  function handleDownVote() {
    if (voteCount > 0) setVoteCount(voteCount - 1);
  }

  return (
    <div className="comment-wrapper">
      <div className="comment-bg">
        <div className="comment-vote-container">
          <span className="vote-cta" onClick={handleUpvote}>
            +
          </span>
          <span className="vote-counter-text">{voteCount}</span>
          <span className="vote-cta" onClick={handleDownVote}>
            -
          </span>
        </div>
        <div className="comment-content-container">
          <div className="comment-header">
            <div className="comment-info-container">
              <div className="comment-author-info">
                <div className="img-container">
                  <img src={image} alt="" />
                </div>
                <p className="author">{author}</p>
              </div>
              <p className="time">{time}</p>
            </div>
            <div className="reply-container">
              <img
                className="reply-icon"
                src="./Public/icon-reply.svg"
                alt=""
              />
              <p className="reply">Reply</p>
            </div>
          </div>

          <p className="comment-detail">{text}</p>
        </div>
      </div>
      {replies.length > 0 && renderReplies(replies, author)}
    </div>
  );
}

export default Comments;
