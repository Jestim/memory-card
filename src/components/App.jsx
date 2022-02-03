import React, { useState, useEffect } from 'react';
import Header from './Header';
import ScoreBoard from './ScoreBoard';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <div className="app">
      <Header />
      <ScoreBoard
        currentScore={currentScore}
        highscore={highscore}
      />
    </div>
  );
}

export default App;