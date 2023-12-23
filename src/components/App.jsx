import "../index.css";
import Comments from "./Comments";
import Form from "./Form";
import Reply from "./Reply";
// import CommentPage from "./CommentPage";
import MyReply from "./MyReply";

function App() {
  return (
    <div className="bg">
      <div className="container">
        <div className="comment-box">
          <Comments />
          <Comments />
          <div className="reply-box">
            <div className="stroke"></div>
            <div className="replies">
              <Reply />
              <Reply />
              <MyReply />
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default App;
