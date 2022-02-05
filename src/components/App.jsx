import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';
import ScoreBoard from './ScoreBoard';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const incrementCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetCurrentScore = () => {
    setCurrentScore(0);
  };

  const incrementHighscore = () => {
    setHighscore(highscore + 1);
  };

  return (
    <div className="app">
      <Header />
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
      />
    </div>
  );
}

export default App;