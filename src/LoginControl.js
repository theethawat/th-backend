import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import firebase from './firebase'
import Homepage from './ActiveLogin'

class LoginControl extends Component {
    //constructor like oop
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            currentUser: '',
            message: '',
            login: false
        }
    }

    //Method or function
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    currentUser: user,
                    login:true
                })
            }
        })
    }
    
    
    onChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = e => {

        e.preventDefault()
        // window.alert("Loggin in")
        this.setState({
            email: this.email,
            password: this.password,
        })
        console.log("Email: " + this.state.email + "  Password: " + this.state.password)
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(response => {
                this.setState({
                    currentUser: response.user,
                    login: true
                })
                console.log("Login Success")
                console.log(this.state.currentUser)
            })
            .catch(error => {
                this.setState({
                    message: error.message
                })
                console.log("Login Error")
                console.log(this.state.message)
                console.log(this.state.email)
            })

    }
   

    render() {
        if (this.state.login === false) {
            return (
                <div className="container">
                    <br />
                    <div className="columns">
                        <div className="column is-half">
                            <h1 className="title is-3">Theethawat Sa Backend Application</h1>
                            <h4 className="subtitle is-4">Login</h4>
                            <form onSubmit={this.onSubmit}>
                                <label className="label">Email</label>
                                <input className="input " onChange={this.onChange} type="email" name="email"></input>
                                <label className="label">Password</label>
                                <input className="input " onChange={this.onChange} type="password" name="password"></input>
                                <br />
                                <button type="submit" className="button is-info">Login</button>
                            </form>
                            <br/>
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(
                <Homepage value={this.state.currentUser}/>
            )
        }
    }
    

}
export default LoginControl