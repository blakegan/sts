import React from 'react';
import {Link} from 'react-router-dom';

import 'app/css/Banner.css';

export const Banner = (props) => {
  return (
    <div className="banner-container">
      <div className="banner-box">
        <Link to={props.route}><img draggable="false" alt={props.alt} src={props.src} /></Link>
      </div>
    </div>
  );
}
