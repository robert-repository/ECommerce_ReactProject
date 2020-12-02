import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routing from './config/routes'
import * as serviceWorker from './serviceWorker';
import './css/bootstrap.css';
import './css/style.css';
import './css/icons.css';

ReactDOM.render(<Routing />, document.getElementById('root'));

serviceWorker.unregister();
