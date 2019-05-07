import React, { Component } from "react";
import 'bulma/css/bulma.css'
import firebase from './firebase'
import App from "./App";
import Navbar from './Components/Navbar'
import AddHappiness from './Components/AddHappiness'
import ShowHappiness from "./Components/ShowHappiness"

class ActiveLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: this.props.value,
            login: true,
            username: ''
        }
    }
    onLogout = () => {
        firebase.auth().signOut().then(
            () => {
                this.setState({
                    login: false
                })
                alert("Sign Out Success")
            }

        ).catch(function (error) {
            window.alert("Cannot Sign Out" + error)
        })
    }

    componentDidMount() {
        if (this.state.login == true) {
            let userId = this.state.currentUser.uid
            console.log(userId)
            let memberUser = firebase.database().ref("users/" + userId)
            memberUser.once('value').then(snapshot => {
                let username = snapshot.val().username
                this.setState({
                    username: username
                })
            })
        }
    }

    render() {
        if (this.state.login == false)
            return (
                <App />
            )
        return (
            <div>
                <Navbar username={this.state.username} user={this.state.currentUser}/>
                <div className="container">
                    <h4>Welcome</h4>
                    <h5>Now User is {this.state.currentUser.email}  </h5>
                    <button type="button" onClick={this.onLogout} className="button is-primary">Logout</button>
                </div>
                <div className="columns">
                    <div className="column">
                        <AddHappiness user={this.state.currentUser}/>
                    </div>
                    <div className="column">
                        <ShowHappiness />
                    </div>
                    
                </div>
               
            </div>
        )
    }
}
export default ActiveLogin