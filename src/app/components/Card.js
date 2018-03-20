import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import classNames from 'classnames';

import 'app/css/Card.css';

export const Card = (props) => {
  const ART_PATH_BASE = "./card-assets/art/";

  let backgroundClasses = classNames('card-background', props.family, props.rarity, props.type);
  let containerClasses = classNames('card-container', props.family);
  let nameClasses = 'card-name';

  if (props.isUpgrade === true) {
    nameClasses = nameClasses + ' upgraded';
  }

  let cost = "";
  if (props.cost === "na") {
    backgroundClasses = backgroundClasses + " costless";
  } else if (typeof props.cost === 'string') {
    cost = props.cost.replace(/<u>/g, '<span class="upgraded">');
    cost = cost.replace(/<\/u>/g, '</span>');
  } else {
    cost = props.cost;
  }

  let artPath = ART_PATH_BASE + props.family + "/" + props.art;

  // Text post-processing
  let text = props.text.map((line, index) => {
    line = line.replace(/<kw>/g, '<span class="keyword">');
    line = line.replace(/<\/kw>/g, '</span>');

    line = line.replace(/<u>/g, '<span class="upgraded">');
    line = line.replace(/<\/u>/g, '</span>');

    return <li key={index}>{ReactHtmlParser(line)}</li>;
  });

  return (
    <div className={containerClasses} key={props.id}>
      <div className={backgroundClasses}></div>
      <div className="card-cost">{ReactHtmlParser(cost)}</div>
      <div className={nameClasses}>{props.name}</div>
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
  isUpgrade: PropTypes.bool,
  family: PropTypes.string,
  name: PropTypes.string,
  rarity: PropTypes.string,
  text: PropTypes.array,
  type: PropTypes.string
}
