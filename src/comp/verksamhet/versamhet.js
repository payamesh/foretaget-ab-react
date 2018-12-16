import React, { Component } from "react";
import './verksamhet.css';
import verkbild from "../../img/bakgrund.jpeg"

export default class Verksamhet extends React.Component {
    render() {
        return (
       
            <div className="testish">
                <div className="imgs">
                    <img src={verkbild} className="verksamhetBild" alt=""/>
                </div>
                <div className="textboxVerk">
                <div className="textHolder">
                    <h3 className="verksamhet_h3">Verksamhet</h3>
                    <h2 className="verksamhet_h2">Specialiserade på advokatgrejer</h2>
                    <p className="verksamhet_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus error libero quod veniam expedita ut dignissimos nesciunt porro qui ipsum deserunt, maiores doloremque eaque culpa!</p>
                    </div>
                </div>
            </div>

                    );
                }
}