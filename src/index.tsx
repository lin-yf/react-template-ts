import './assets/styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const render = (App: any) => {
  ReactDOM.render(<App />, document.getElementById('root'));
};
const App = require('./App').default;

render(App);
if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line global-require
    const NewApp = require('./App').default;
    render(NewApp);
  });
}
