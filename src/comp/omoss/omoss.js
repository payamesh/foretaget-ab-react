import React, { Component } from "react";
import './omoss.css';
import showBild from "../../img/bakgrund.jpeg"

export default class OmOss extends React.Component {
    render() {
        return (
            <div className="showcaseHolder">
            <div className="showcaseText mb50">
                <h1 className="omoss_h1">
                    SPECIALISERADE FÖR VÅRA KLIENTER
                </h1>
                <h2 className="omoss_h2">Donec id elit non mi porta gravida at eget metus.</h2>
                <p className="omoss_p">Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta
                    felis euismod semper. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis.
                    Aenean eu leo quam. Pellentesque ornare sem lacinia
                    quam venenatis vestibulum.</p>
            </div>
            <div className="showcaseImage mb30">img1</div>
            <div className="showcaseImage mb60">img2</div>
            <div className="showcaseText mb20 ">
                <h1 className="omoss_h1">SEDAN 2005</h1>
                <h2 className="omoss_h2">Donec id elit non mi porta gravida at eget metus.</h2>
                <p className="omoss_p">Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta
                    felis euismod semper. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis.
                    Aenean eu leo quam. Pellentesque ornare sem lacinia
                    quam venenatis vestibulum.</p>
            </div>

            <div className="showcaseText mb80">
                <h1 className="omoss_h1">VÅRA ANSTÄLLDA</h1>
                <h2 className="omoss_h2">Donec id elit non mi porta gravida at eget metus.</h2>
                <p className="omoss_p">Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta
                    felis euismod semper. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis.
                    Aenean eu leo quam. Pellentesque ornare sem lacinia
                    quam venenatis vestibulum.</p>
            </div>
            <div className="showcaseImage">img3</div>
        </div>

                    );
                }
}