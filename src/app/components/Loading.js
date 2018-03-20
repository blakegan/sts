import React from 'react';

import 'app/css/Loading.css';

export const Loading = (props) => {
  return (
    <div className="loading-container">
      <h1>Loading...</h1>
      <img alt="Loading..." src="/misc-assets/cultist.gif" />
    </div>
  );
}
