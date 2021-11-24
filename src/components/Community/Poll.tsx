const Poll: React.FC = (): JSX.Element => {
  return (
    <div className="poll">
      <div>
        <h3 className="poll-title">What are your thoughts?</h3>
        <p>Is it my moral duty to cover shifts in the absence of staff?</p>
        <div className="poll-options">
          <div className="poll-option">
            <input type="radio" id="answer1" name="poll-option" value="Yes" />
            <label htmlFor="answer1">Yes</label>
          </div>
          <div className="poll-option">
            <input type="radio" id="answer2" name="poll-option" value="No" />
            <label htmlFor="answer2">No</label>
          </div>
        </div>
        <div className="vote-buttons">
          <button>Vote</button>
          <p>View Results</p>
        </div>
      </div>
      <div className="related-content">
        <p className="related-article">Read Related Article</p>
        <p className="past-polls">See all polls</p>
      </div>
    </div>
  );
};

export default Poll;
