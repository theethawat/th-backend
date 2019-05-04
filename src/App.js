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
      currentUser: null,
      message: '',
    }
  }
 

  render() {
    if (this.props.currentUser != null) {
      this.setState({
        currentUser:this.props.currentUser
      })
      console.log("Handling Back Success")
    }
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
