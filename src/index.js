import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import App from './pages/home/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker(); 
 