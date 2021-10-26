import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import { AppThemeProvider } from 'ds';
import { Provider } from 'react-redux';
import { store } from 'reduxStore';

import App from 'app';

const render = (Component) => {
  return ReactDOM.render(
    <Provider store={store}>
      <AppThemeProvider>
        <Router>
          <Component />
        </Router>
      </AppThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('app', () => {
    const NextApp = require('app').default;
    render(NextApp);
  });
}
