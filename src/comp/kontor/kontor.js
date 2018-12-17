import React, { Component } from "react";
import './kontor.css';


export default class Kontor extends React.Component {
    render() {
        return (

            <div className="grid">
                <div className="textboxKontor">
                    <div className="textHolder">
                        <h4 className="kontor_h4">HITTA TILL OSS</h4>
                        <h2 className="kontor_h2">Vårt fina kontor ligger beläget i centrala Stockholm</h2>
                        <p className="kontor_p">Åsögatan 119 <br/> 111 35 Stockholm <br/> <br/> 08-765 65 65 <br/> <a className="blue-color">info@foretagab.se</a>
                        <br/><br/> Organisationsnummer: 556677-8899</p>
                        </div>
                    </div>
                    <div id="map" className="smallmap">map</div>
                 </div>

       

                    );
                }
}