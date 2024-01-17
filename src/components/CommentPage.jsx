/* eslint-disable react/prop-types */
import Comments from "./Comments";
import Reply from "./Reply";
import Form from "./Form";
import MyReply from "./MyReply";

function CommentPage({ commentData }) {
  return (
    <div className="bg">
      <>
        <div className="comment-container">
          <div className="comment-box">
            {commentData.map((el) => (
              <Comments
                key={el.id}
                text={el.text}
                username={el.author}
                image={el.image}
                time={el.time}
              />
            ))}
            <div className="reply-box">
              <div className="stroke"></div>
              <div className="replies">
                <Reply />
                <MyReply />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed-input">
          <Form />
        </div>
      </>
    </div>
  );
}

export default CommentPage;
