import React, { Component } from 'react';
import {Card} from "app/components/Card";

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

    this.firebaseRef.orderByChild("isUpgrade").equalTo(false).once("value", (snapshot) => {
      snapshot.forEach( (data) => {
        let card = {
          id: data.val().id,
          art: data.val().art,
          cost: data.val().cost,
          family: data.val().family,
          name: data.val().name,
          rarity: data.val().rarity,
          text: data.val().text,
          type: data.val().type
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
          <Card key={card.id} art={card.art} cost={card.cost} family={card.family} name={card.name} rarity={card.rarity} text={card.text} type={card.type}/>
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
