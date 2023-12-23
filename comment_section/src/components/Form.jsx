function Form() {
  return (
    <div className="comment-input-container">
      <div className="input-header">
        <div className="img-container">
          <img src="./Public/Avatars/Alex.png" alt="" />
        </div>
        <div className="input-field">
          <textarea
            type="text"
            className="custom-input"
            placeholder="Add Comment"
          />
        </div>
      </div>
      <button className="send-cta">
        <span className="cta-text">Send</span>
      </button>
    </div>
  );
}

export default Form;
