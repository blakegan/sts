import React from 'react';
import PropTypes from 'prop-types';

import {Family} from "app/components/Family";
import 'app/css/FamilyFilter.css';

export const FamilyFilter = (props) => {
  let filters;
  if (props.filters) {
    filters = props.filters.map(family => {
      return (
        <Family key={family.id} name={family.name}/>
      );
    });
  }

  return (
    <div className="family-filter">
      {filters}
    </div>
  );
}

FamilyFilter.propTypes = {
  families: PropTypes.array
}
