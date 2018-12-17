import React, { Component } from "react";
import './section-b.css';
import gasell from "../../img/gasell.png"

export default class SectionB extends React.Component {
    render() {
        return (
       
            <div className="grid">
                <div className="sectionbox-b">
                    <div className="sectionb_h1">"</div>
                    <div className="sectionb_p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, repellendus. Laboriosam mollitia ut nesciunt sunt nam animi reiciendis sapiente accusamus!</div>
                    <hr className="hr_sectionbox"/>
                <div className="read-more-b"><a href="#kontakt">Länktext ></a></div>
                </div>

                <img src={gasell} alt="" className="img-gasell"/>
                <div className="imgbutton"></div>
                <div className="imgbutton2"></div>
                <div className="imgbutton3"></div>

            </div>

                    );
                }
}