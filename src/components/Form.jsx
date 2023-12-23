function Form() {
  return (
    <div className="comment-input-container">
      <div className="input-header">
        <div className="img-container">
          <img src="./Public/Avatars/Alex.png" alt="" />
        </div>
        <input type="text" className="input-field" placeholder="Add Comment" />
      </div>
      <button className="send-cta">
        <span className="cta-text">Send</span>
      </button>
    </div>
  );
}

export default Form;
