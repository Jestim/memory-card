import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import originalCards from './originalCards';

function GameBoard({
  currentScore,
  incrementCurrentScore,
  resetCurrentScore,
  highscore,
  incrementHighscore,
}) {
  const shuffledCards = _.shuffle(originalCards);
  const [cards, setCards] = useState(shuffledCards);

  function resetCards() {
    console.log('Reset cards called');
    const updatedCards = _.cloneDeep(cards);

    updatedCards.forEach((card) => {
      card.hasBeenClicked = false;
    });

    setCards(_.shuffle(updatedCards));
  }

  function handleCardClick(e) {
    console.log('handleCardClick called');
    const clickedCardId = e.currentTarget.id;
    const updatedCards = _.cloneDeep(cards);

    for (let i = 0; i < updatedCards.length; i += 1) {
      if (clickedCardId === updatedCards[i].id && updatedCards[i].hasBeenClicked) {
        resetCurrentScore();
        resetCards();
        return;
      }

      if (clickedCardId === updatedCards[i].id && !updatedCards[i].hasBeenClicked) {
        incrementCurrentScore();
        console.log('incrementCurrentScore called');
        updatedCards[i].hasBeenClicked = true;
        if (highscore <= currentScore) {
          incrementHighscore();
        }
      }
    }

    console.log(currentScore);
    setCards(_.shuffle(updatedCards));
  }

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