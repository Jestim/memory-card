function DisplayResult({
  currentScore,
  handleRetry,
  isGameWon,
}) {
  return (
    <div className="result-container">
      <div className="result">
        <h1 className="result-text">
          {isGameWon
            ? `You Won! You got ${currentScore} points!`
            : `You Lost! You got ${currentScore} points!`}
        </h1>
        <button className="retry-button" onClick={handleRetry} type="button">
          {isGameWon
            ? 'Go Again'
            : 'Retry!'}
        </button>
      </div>
    </div>
  );
}

export default DisplayResult;