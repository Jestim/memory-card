import React, { useEffect, useState } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';
import ScoreBoard from './ScoreBoard';
import DisplayResult from './DisplayResult';
import maxScore from './utils';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [isGameLost, setIsGameLost] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetCurrentScore = () => {
    setCurrentScore(0);
  };

  const incrementHighscore = () => {
    setHighscore(highscore + 1);
  };

  const handleIsGameLost = () => {
    setIsGameLost(true);
  };

  const handleIsGameWon = () => {
    setIsGameWon(true);
  };

  const handleRetry = () => {
    setIsGameLost(false);
    setIsGameWon(false);
    resetCurrentScore();
  };

  useEffect(() => {
    if (currentScore === maxScore) {
      handleIsGameWon();
    }

    if (currentScore > highscore) {
      incrementHighscore();
    }
  }, [currentScore]);

  return (
    <div className="app">
      <Header />
      {isGameWon || isGameLost
        ? (
          <DisplayResult
            currentScore={currentScore}
            handleRetry={handleRetry}
            isGameWon={isGameWon}
          />
        ) : null}
      <ScoreBoard
        currentScore={currentScore}
        highscore={highscore}
      />
      <GameBoard
        incrementCurrentScore={incrementCurrentScore}
        handleIsGameLost={handleIsGameLost}
        isGameWon={isGameWon}
      />
    </div>
  );
}

export default App;