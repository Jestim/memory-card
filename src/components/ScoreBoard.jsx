function ScoreBoard({ currentScore, highscore }) {
  return (
    <div className="score-board">
      <h2 className="current-score">
        {`Current score: ${currentScore}`}
      </h2>
      <h2 className="highscore">
        {`Highscore: ${highscore}`}
      </h2>
    </div>
  );
}

export default ScoreBoard;