import React from 'react';
import ReactDOM,{ render } from 'react-dom';

import App from './app';
import CreditCard from './components/creditCard/credit';

window.location.pathname == "/creditCard.html" ? render(<CreditCard />, document.getElementById('root')) : render(<App />, document.getElementById('root'));  
