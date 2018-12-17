import React, { Component } from 'react';
import './nav.css';

export default class MyNavBar extends React.Component {
    render() {
        return(
            <nav>
        <div className="nav-grid">
            <ul className="nav-main">
                <li><a href="#start">START /</a></li>
                <li><a href="#verksamhet">VERKSAMHET /</a></li>
                <li><a href="#omoss">OM OSS /</a></li>
                <li><a href="#kontakt">KONTAKT</a></li>       
             </ul>
             <p className="nav-company-name">Företag AB</p>
        </div>


            </nav>
        
        );
    }
}

