import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import store from 'app/store';

import 'app/css/Family.css';

const clickHandler = (event) => {
  store.dispatch({
    type: "TOGGLE_FAMILY_FILTER",
    payload: event.currentTarget.value
  });
}

export const Family = (props) => {
  let containerClasses = classNames('family-container', props.name);
  if (props.isActive) {
    containerClasses = classNames('active', containerClasses);
  }

  return (
    <div className={containerClasses} key={props.id}>
      <button onClick={(event) => clickHandler(event)} value={props.id}>{props.name}</button>
    </div>
  );
}

Family.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  isActive: PropTypes.bool
}
