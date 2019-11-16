import React from 'react';

import './App.css';
import './stylesheet.css';
import './javascript.js';


function App() {
  return (
    <div className="App">

    <div className="skill">
      <div className="outer">
        <div className="inner" data-progress="100%" data-value="0">
          <p id="demo2">€0</p>
          <h2 id="demo">€0</h2>
          <div></div>
        </div>
      </div>
    </div>

    <div class="perc">
      <h3 id="here">0%</h3>
    </div>

      <img src="logo.png" className="logo" width="150px" height="150px" alt="logo"/>
      <img src="qr.png" className="qrCode" width="150px" height="150px" alt="qr"/>

      <button className="btn" onclick="buttonClick5(),buttonClick6()">Donate!</button>
      <input type="text" id="donation" background-color="goldenrod" name="quantity" min="1" max="5"/>

    </div>

  );
}

export default App;
