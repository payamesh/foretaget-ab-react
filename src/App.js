import React, { Component } from 'react';
import SectionA from './comp/section-a/section-a.js'
import SectionB from './comp/section-b/section-b.js'
import Verksamhet from './comp/verksamhet/versamhet.js';
import OmOss from './comp/omoss/omoss.js';
import './App.css';
import MyNavBar from './comp/nav/nav.js'

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
              <div  className="grid">
            <div className="textvidstreck">Verksamhet</div>
            <div className="streck"></div>
            </div>
            <OmOss/>
            <div className="grid" style={{marginTop: '60px'}}>
        <div className="textvidstreck">Kontor</div>
        <div className="streck"></div>
    </div>
      </div>
    );
  }
}

export default App;
