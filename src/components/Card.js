import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
  render() {
    const classNames = require('classnames');
    let backgroundClasses = classNames('card-background', this.props.family);
    let bannerClasses = classNames('card-banner', this.props.rarity);

    let text = this.props.text.map((line, index) => {
      let pieces = [];
      let keywordIndex = line.indexOf("<kw>");

      if (keywordIndex > -1) {
        let endIndex = 0;

        while (keywordIndex > -1) {
          endIndex = line.indexOf("</kw>", keywordIndex);
          let constructedLine = line.substring(0, keywordIndex);
          pieces.push(constructedLine);
          let keyword = line.substring(keywordIndex+4, endIndex);
          let keywordSpan = (<span key={keywordIndex} className="keyword">{keyword}</span>);
          pieces.push(keywordSpan);
          keywordIndex = line.indexOf("<kw>", keywordIndex+1);
        }
        let finalPiece = line.substr(endIndex+5);
        pieces.push(finalPiece);
      } else {
        pieces.push(line);
      }

      return <li key={index}>{pieces}</li>;
    });

    return (
      <div className="card-container" key={this.props.id}>
        <div className={backgroundClasses}></div>
        <div className="card-cost"></div>
        <div className="card-name">{this.props.name}</div>
        <div className={bannerClasses} type="attack"></div>
        <div className="card-art"><img alt={this.props.name} src={this.props.art} /></div>
        <div className="card-text">
          <ul>
            {text}
          </ul>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  art: PropTypes.string,
  family: PropTypes.string,
  rarity: PropTypes.string,
  text: PropTypes.array,
}

export default Card;
