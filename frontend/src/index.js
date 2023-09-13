import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import { EventProvider } from './screens/EventContext';

ReactDOM.render(
  <Provider store={store}>
    <EventProvider>
    <App />
    </EventProvider>
  </Provider>,
  document.getElementById('root')
);

