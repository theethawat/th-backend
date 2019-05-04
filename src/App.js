import React, { Component } from 'react';
import './App.css';
import Loginmenu from './Loginmenu';
import ActiveLogin from "./ActiveLogin";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      currentUser: '',
      message: '',
    }
  }
  render() {
    if (this.state.currentUser == null) {
      return (
        <div className="App">
          <Loginmenu />
        </div>
      )
    } else {
      return (
        <div className="App">
          <ActiveLogin />
        </div>
      )
    }
  }


}


export default App;
