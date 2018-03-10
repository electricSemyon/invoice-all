import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import routes from './routes';
import store from './store/configureStore';

const App = () => (
    <Provider store={store}>
      <Router>
        {routes}
      </Router>
    </Provider>
);

ReactDOM.render(<App />, document.querySelector('#root'));