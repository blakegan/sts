import React from 'react';
import PropTypes from 'prop-types';

export const Family = (props) => {
  const classNames = require('classnames');

  return (
    <div className={props.name} key={props.id}>
    {props.name}
    </div>
  );
}

Family.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
}
