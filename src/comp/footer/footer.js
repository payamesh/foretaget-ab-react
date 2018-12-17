import React, { Component } from "react";
import './footer.css';


export default class Footer extends React.Component {
    render() {
        return (
            
            <footer className="section-container">
                <hr className="hr_separator"/>
                <div className="footergrid">
                    <div className="footerbox"></div>
                    <div className="footerbox"></div>
                    <div className="footerbox"></div>
                    <div className="footer-kontakt">
                    <h3>Företag AB</h3>
                <p> Åsögatan 119, 111 49 </p>
                <p>Stockholm 08-876 64 65 | info@foretagab.se</p>
                    </div>
                </div>
            </footer>



       

                    );
                }
}