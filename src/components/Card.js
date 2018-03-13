import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Card extends Component {
  render() {
    const classNames = require('classnames');
    const ART_PATH_BASE = "./card-assets/art/";

    let backgroundClasses = classNames('card-background', this.props.family, this.props.rarity, this.props.type);

    let cost = "";
    if (this.props.cost === "na") {
      backgroundClasses = classNames(backgroundClasses, "costless");
    } else {
      cost = this.props.cost;
    }

    let artPath = ART_PATH_BASE + this.props.family + "/" + this.props.art;

    // Text post-processing for KEYWORDS
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
        <div className="card-cost">{cost}</div>
        <div className="card-name">{this.props.name}</div>
        <div className="card-art"><img alt={this.props.name} src={artPath} /></div>
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
  art: PropTypes.string,
  cost: PropTypes.string,
  family: PropTypes.string,
  name: PropTypes.string,
  rarity: PropTypes.string,
  text: PropTypes.array,
  type: PropTypes.string
}

export default Card;
