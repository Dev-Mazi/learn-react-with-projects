function MyReply() {
  return (
    <div className="comment-reply-container">
      <div className="comment-vote-container">
        <span className="vote-cta">+</span>
        <span className="vote-counter-text">12</span>
        <span className="vote-cta">-</span>
      </div>
      <div className="comment-content-container">
        <div className="comment-header">
          <div className="comment-info-container">
            <div className="comment-author-info">
              <div className="img-container">
                <img src="./Public/Avatars/Alex.png" alt="" />
              </div>
              <p className="author">officialmazii</p>

              <div className="my-account-tag">
                <span className="my-account-tag-text">you</span>
              </div>
            </div>
            <p className="time">2 months ago</p>
          </div>
          <div className="my-reply-cta-container">
            <div className="reply-container">
              <img
                className="reply-icon"
                src="./Public/icon-delete.svg"
                alt=""
              />
              <p className="delete">Delete</p>
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
        </div>

        <p className="comment-detail">
          <span className="reply-tag">@georgestone </span>
          The insights presented in this article are truly enlightening! The
          author has done an excellent job of breaking down complex concepts
          into easily digestible points. I particularly appreciated the section
          on practical applications.
        </p>
      </div>
    </div>
  );
}

export default MyReply;
