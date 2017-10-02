import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render((
  <BrowserRouter basename="za-tone">
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
