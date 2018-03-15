import React from "react";
import PropTypes from 'prop-types';

export const Card = (props) => {
  const classNames = require('classnames');
  const ART_PATH_BASE = "./card-assets/art/";

  let backgroundClasses = classNames('card-background', props.family, props.rarity, props.type);
  let containerClasses = classNames('card-container', props.family);

  let cost = "";
  if (props.cost === "na") {
    backgroundClasses = backgroundClasses + " costless";
  } else {
    cost = props.cost;
  }

  let artPath = ART_PATH_BASE + props.family + "/" + props.art;

  // Text post-processing for KEYWORDS
  let text = props.text.map((line, index) => {
    let pieces = [];
    let keywordIndex = line.indexOf("<kw>");

    if (keywordIndex > -1) {
      let endIndex = 0;
      let startIndex = 0;

      while (keywordIndex > -1) {
        endIndex = line.indexOf("</kw>", keywordIndex);
        let constructedLine = line.substring(startIndex, keywordIndex);
        pieces.push(constructedLine);
        let keyword = line.substring(keywordIndex+4, endIndex);
        let keywordSpan = (<span key={keywordIndex} className="keyword">{keyword}</span>);
        pieces.push(keywordSpan);
        keywordIndex = line.indexOf("<kw>", keywordIndex+1);
        startIndex = endIndex+5;
      }

      let finalPiece = line.substr(endIndex+5);
      pieces.push(finalPiece);
    } else {
      pieces.push(line);
    }

    return <li key={index}>{pieces}</li>;
  });

  return (
    <div className={containerClasses} key={props.id}>
      <div className={backgroundClasses}></div>
      <div className="card-cost">{cost}</div>
      <div className="card-name">{props.name}</div>
      <div className="card-art"><img alt={props.name} src={artPath} /></div>
      <div className="card-text">
        <ul>
          {text}
        </ul>
      </div>
    </div>
  );
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
