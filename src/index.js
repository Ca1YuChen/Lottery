import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/page/Page'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Page />, 
    document.getElementById('root')
);
registerServiceWorker();
