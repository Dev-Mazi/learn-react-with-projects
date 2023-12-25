import "../index.css";

// import CommentPage from "./CommentPage";

import CommentPage from "./CommentPage";
import { useState } from "react";

function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      text: "The insights presented in this article are truly enlightening! The author has done an excellent job of breaking down complex concepts into easily digestible points. I particularly appreciated the section on practical applications.",
      author: "alexdman",
      image: "./Public/Avatars/Alex.png",
      vote: 12,
      time: "12 minutes ago",
      replies: [],
    },

    {
      id: 2,
      text: "While the overall content is intriguing, it feels like there's a missed opportunity to delve deeper into the ethical implications of the discussed technology. Exploring this aspect further could greatly enhance the article's depth.",
      author: "chriswilliams",
      image: "./Public/Avatars/John.png",
      vote: 12,
      time: "3 minutes ago",
      replies: [
        {
          id: 301,
          text: "Why do you think so?",
          author: "Eva Martinez",
          upvotes: 2,
          downvotes: 0,
        },
        // ... more replies if needed
      ],
    },
  ]);

  function deleteComment() {
    setComments([]);
  }

  return (
    <div>
      <CommentPage commentData={comments} deleteComment={deleteComment} />
    </div>
  );
}

export default App;
