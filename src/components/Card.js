import React, { Component } from 'react';

export class Card extends Component {

  render() {
    //var classNames = require('classnames');
    console.log(this.props);
    //let backgroundClasses = classNames('card-background', this.props.family);

    return (
      <div className="card-container">
        <div className="card-background status"></div>
        <div className="card-cost"></div>
        <div className="card-title">Wound</div>
        <div className="card-banner common" type="attack"></div>
        <div className="card-art"><img src="./wound-art.png" /></div>
        <div className="card-text"><span className="keyword">Unplayable</span>.</div>
      </div>
    );
  }
}

export default Card;
