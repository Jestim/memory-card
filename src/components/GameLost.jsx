function GameLost({ currentScore, handleRetry }) {
  return (
    <div className="result-container">
      <div className="result">
        <h1 className="result-text">
          {`You Lost! You got ${currentScore} points!`}
        </h1>
        <button className="retry-button" onClick={handleRetry} type="button">Retry!</button>
      </div>
    </div>
  );
}

export default GameLost;