import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import App from 'app/containers/App';
import store from 'app/store';

import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
), document.getElementById('app'));

registerServiceWorker();
