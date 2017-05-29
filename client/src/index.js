import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import './index.css';
import 'semantic-ui-css/semantic.css';

require('./stylesheets/base.css');
require('./stylesheets/contact.css');
require('./stylesheets/home.css');

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
