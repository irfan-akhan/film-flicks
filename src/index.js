import React from 'react';
import ReactDOM from 'react-dom';

// local imports
import App from './components/App';
const loader = document.querySelector('.loader-container');
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

ReactDOM.render(
    <React.StrictMode>
        <App showLoader={showLoader} hideLoader={hideLoader} />
    </React.StrictMode>,
    document.getElementById('root'),
);
