import React from 'react';

import TopNav from './top-nav';


import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav onClick={props.onClick} resetGame={props.resetGame}/>
            <h1>HOT or COLD</h1>
        </header>
    );
};
