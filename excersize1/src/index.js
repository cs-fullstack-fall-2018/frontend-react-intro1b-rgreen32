import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StudentAccount from './StudentAccount';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<StudentAccount firstName="Rey" grade="78" />, document.getElementById('root'));
registerServiceWorker();
