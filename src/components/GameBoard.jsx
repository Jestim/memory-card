import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import originalCards from './originalCards';

function GameBoard({
  currentScore,
  incrementCurrentScore,
  highscore,
  incrementHighscore,
  handleIsGameLost,
  isGameWon,
}) {
  const shuffledCards = _.shuffle(originalCards);
  const [cards, setCards] = useState(shuffledCards);

  function resetCards() {
    const updatedCards = _.cloneDeep(cards);

    updatedCards.forEach((card) => {
      card.hasBeenClicked = false;
    });

    setCards(_.shuffle(updatedCards));
  }

  function handleCardClick(e) {
    const clickedCardId = e.currentTarget.id;
    const updatedCards = _.cloneDeep(cards);

    for (let i = 0; i < updatedCards.length; i += 1) {
      if (clickedCardId === updatedCards[i].id && updatedCards[i].hasBeenClicked) {
        handleIsGameLost();
        resetCards();
        return;
      }

      if (clickedCardId === updatedCards[i].id && !updatedCards[i].hasBeenClicked) {
        incrementCurrentScore();
        updatedCards[i].hasBeenClicked = true;
        if (highscore <= currentScore) {
          incrementHighscore();
        }
      }
    }

    setCards(_.shuffle(updatedCards));
  }

  useEffect(() => {
    resetCards();
  }, [isGameWon]);

  return (
    <div className="game-board">
      {cards.map((card) => (
        <button id={card.id} key={card.id} className="card" onClick={handleCardClick} type="button">
          <figure>
            <figcaption className="card-text">{card.text}</figcaption>
            <img src={card.imgSrc} alt={card.text} />
          </figure>
        </button>
      ))}
    </div>
  );
}

export default GameBoard;