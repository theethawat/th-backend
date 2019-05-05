import React, {Component} from "react";
import 'bulma/css/bulma.css'
import firebase from './firebase'
import App from "./App";
import { database } from "firebase";
class ActiveLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentUser: this.props.value,
          login:true,
          username:''
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
  
   componentDidMount(){
       if(this.state.login == true){
           let userId= this.state.currentUser.uid
           console.log(userId)
           let memberUser = firebase.database().ref("users/"+userId)
           memberUser.once('value').then(snapshot=>{
               let username =  snapshot.val().username
               this.setState({
                   username:username
               })
           })
           
       }
       
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
                <h5>User Id {this.state.username}</h5>
            </div>
        )
    }
}
export default ActiveLogin