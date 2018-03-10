import React, { Component } from 'react';
import Card from "./Card";

export class Book extends Component {

  constructor(props) {
    super();
    this.state = {
      cards: []
    };
  }

  componentWillMount() {
    this.firebaseRef = window.firebase.database().ref('/cards');
    let cards = [];

    this.firebaseRef.once("value", (snapshot) => {
      snapshot.forEach( (data) => {
        let card = {
          id: data.val().id,
          name: data.val().name,
          family: data.val().family,
          rarity: data.val().rarity,
          art: data.val().art,
          text: data.val().text
        }
        cards.push(card);
        this.setState({cards: cards});
      });
    });
  }

  render() {
    let cards;

    if (this.state.cards) {
      cards = this.state.cards.map(card => {
        return (
          <Card key={card.id} family={card.family} name={card.name} art={card.art} rarity={card.rarity} text={card.text}/>
        );
      });
    }

    return (
      <div className="book">
        {cards}
      </div>
    );
  }
}

export default Book;
