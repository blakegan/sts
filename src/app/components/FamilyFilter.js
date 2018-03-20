import React from 'react';
import PropTypes from 'prop-types';

import {Family} from "app/components/Family";
import 'app/css/FamilyFilter.css';

export const FamilyFilter = (props) => {
  let filters;

  if (props.filters) {
    filters = Object.keys(props.filters).map(key => {
      return (
        <Family key={props.filters[key].id} id={props.filters[key].id} name={props.filters[key].name} isActive={props.filters[key].isActive}/>
      );
    });
  }

  return (
    <div className="family-filter">
      <div className="family-filter-button-container">
        {filters}
      </div>
    </div>
  );
}

FamilyFilter.propTypes = {
  families: PropTypes.array
}
