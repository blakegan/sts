import React from 'react';
import PropTypes from 'prop-types';

import {Card} from "app/components/Card";
import 'app/css/Book.css';

export const Book = (props) => {
  let cards;
  if (props.cards) {
    cards = props.cards.map(card => {
      return (
        <Card key={card.id} art={card.art} cost={card.cost} family={card.family} isUpgrade={card.isUpgrade} name={card.name} rarity={card.rarity} text={card.text} type={card.type}/>
      );
    });
  }

  return (
    <div className="book">
      {cards}
    </div>
  );
}

Book.propTypes = {
  cards: PropTypes.array
}
