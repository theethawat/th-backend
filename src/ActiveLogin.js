import React, {Component} from "react";
import 'bulma/css/bulma.css'
import firebase from './firebase'
import App from "./App";
class ActiveLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentUser: this.props.value,
          login:true
        }
      }
   onLogout = () =>{
        firebase.auth().signOut().then(
              () => {
                this.setState({
                login:false
                })
                alert("Sign Out Success")
            }
            
        ).catch(function(error) {
            window.alert("Cannot Sign Out" + error)
        })
   } 
    render(){
        if(this.state.login == false)
        return(
            <App/>
        )
        return(
            <div className="container">
                <h4>Welcome</h4>
                <h5>Now User is {this.state.currentUser.email}  </h5>
                <button type="button" onClick ={this.onLogout} className="button is-primary">Logout</button>
            </div>
        )
    }
}
export default ActiveLogin