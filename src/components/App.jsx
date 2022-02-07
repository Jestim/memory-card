import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';
import ScoreBoard from './ScoreBoard';
import GameLost from './GameLost';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [isGameLost, setIsGameLost] = useState(false);

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetCurrentScore = () => {
    setCurrentScore(0);
  };

  const incrementHighscore = () => {
    setHighscore(highscore + 1);
  };

  const handleisGameLost = () => {
    setIsGameLost(true);
  };

  const handleRetry = () => {
    setIsGameLost(false);
  };

  return (
    <div className="app">
      <Header />
      {isGameLost
        ? (
          <GameLost
            currentScore={currentScore}
            handleRetry={handleRetry}
          />
        ) : null}

      <ScoreBoard
        currentScore={currentScore}
        highscore={highscore}
      />
      <GameBoard
        currentScore={currentScore}
        incrementCurrentScore={incrementCurrentScore}
        resetCurrentScore={resetCurrentScore}
        highscore={highscore}
        incrementHighscore={incrementHighscore}
        handleisGameLost={handleisGameLost}
      />
    </div>
  );
}

export default App;