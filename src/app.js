// node
// vendors
import React from 'react';
// project
import Menu from './components/menu';
import Header from './components/header/header';
import Cards from './components/cards/cards';

import './styles.scss';

const App = () => (
    <div className='main-app'>
        <Header />
        <div className="content">
            <Cards />
        </div>
    </div>
);

export default App;
