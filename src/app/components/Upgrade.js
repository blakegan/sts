import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import store from 'app/store';

import 'app/css/Upgrade.css';

const clickHandler = (event) => {
  store.dispatch({
    type: "TOGGLE_UPGRADE_CARDS",
    payload: null
  });
}

export const Upgrade = (props) => {
  let containerClasses = 'upgrade-container';
  if (props.isActive) {
    containerClasses = classNames('active', containerClasses);
  }

  return (
    <div className={containerClasses}>
      <div className="upgrade-cards-image"><img id="drop-shadow" onClick={(event) => clickHandler(event)} draggable="false" src="/misc-assets/smith.png" /></div>
      <div className="upgrade-cards-text">Upgrade Cards</div>
    </div>
  );
}

Upgrade.propTypes = {
  isActive: PropTypes.bool
}
