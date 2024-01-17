/* eslint-disable react/prop-types */
import Comments from "./Comments";
import Reply from "./Reply";
import Form from "./Form";
import MyReply from "./MyReply";

function CommentPage({ comments }) {
  return (
    <div className="bg">
      <>
        <div className="comment-container">
          <div className="comment-box">
            {comments.map((comment) => (
              <Comments
                key={comment.id}
                text={comment.text}
                author={comment.author}
                image={comment.image}
                time={comment.time}
                replies={comment.replies}
                renderReplies={(replies, parentUsername) => (
                  <div className="reply-box">
                    <div className="stroke"></div>
                    <div className="replies">
                      {replies.map((reply) => (
                        <Reply
                          key={reply.id}
                          reply={reply.text}
                          username={reply.author}
                          image={reply.image}
                          time={reply.time}
                          parentUsername={parentUsername}
                        />
                      ))}
                      <MyReply />
                    </div>
                  </div>
                )}
              />
            ))}
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
