import React, { Component } from 'react';
import SectionA from './comp/section-a/section-a.js'
import SectionB from './comp/section-b/section-b.js'
import Verksamhet from './comp/verksamhet/versamhet.js';
import OmOss from './comp/omoss/omoss.js';
import Kontor from './comp/kontor/kontor.js';
import Kontakt from './comp/kontakt/kontakt.js';
import './App.css';
import MyNavBar from './comp/nav/nav.js';
import Footer from './comp/footer/footer.js';
import linkedin from './img/linkedinlogo.png'

class App extends Component {
  render() {
    return (
      <div className="App">

              <MyNavBar/>
              <SectionA/>
              <SectionB/>
              <div className="separator1"></div>
              <div  className="grid">
                  <div className="textvidstreck">Verksamhet</div>
                  <div className="streck"></div>
              </div>
            <Verksamhet/>
              <div className="separator1"></div>
              <div className="grid">
                  <div className="textvidstreck">Verksamhet</div>
                  <div className="streck"></div>
                </div>
            <OmOss/>
            <div className="grid" style={{marginTop: '60px'}}>
                <div className="textvidstreck">Kontor</div>
                <div className="streck"></div>
             </div>
            <Kontor/>
            <div className="grid" style={{marginTop: '60px'}}>
              <div className="textvidstreck">Kontakt</div>
              <div className="streck"></div>
            </div>
            <Kontakt/>
            <div className="linkedin-logo">
            <a href="#">
              <img src={linkedin} className="logga" alt=""/>
              </a></div>
            <Footer/>
      </div>
    );
  }
}

export default App;
