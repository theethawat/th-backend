import React, { Component } from 'react';
import './App.css';
import Loginmenu from './LoginControl';
import ActiveLogin from "./ActiveLogin";
class App extends Component {
 

  render() {
    return(
      <div className="App">
        <Loginmenu/>
      </div>
      
    )
  }
}


export default App;
