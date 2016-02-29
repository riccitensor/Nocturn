import React           from 'react';
import { render }      from 'react-dom';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import App             from './components/App';
import rootReducer     from './reducers';

let store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body
);

if (process.env.NODE_ENV !== 'production') {
  require('./utils/open-dev-tools');
}
