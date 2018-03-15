import React from "react";
import 'app/css/Banner.css';

export const Banner = (props) => {
  return (
    <div className="banner-container">
      <div className="banner-box">
        <a href={props.route}><img draggable="false" alt={props.alt} src={props.src} /></a>
      </div>
    </div>
  );
}
