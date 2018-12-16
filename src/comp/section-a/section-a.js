import  React , {Component} from "react";
import './section-a.css';
import bakgrundsbild from "../../img/bakgrund.jpeg"

export default class SectionA extends React.Component {
    render() {
        return (

            <section id="start" className="grid">
                <img id="bakgrundsbild" alt="" src={bakgrundsbild} />
                <div className="sectionbox-a">


                    <div className="textHolder">
                        <h3 className="start_h3">Företag AB</h3>
                        <p className="start_p">Vi är en världens ledande företag<br />specialiserade på saker</p>

                    </div>
                    <div className="read-more-a"><a href="#omoss">LÄS MER </a><a href="#omoss" className="arrow-right">></a> </div>
                </div>

            </section>


        );
    }
}