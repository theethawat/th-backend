import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import firebase from './firebase'
import ActiveLogin from './ActiveLogin'

class Loginmenu extends Component {
    //constructor like oop
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            currentUser:'',
            message:''
        }
    }
    //Method or function
     
    onChange = e =>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.setState({
            email:this.email,
            password:this.password
        })
      
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
            .then(response => {
                this.setState({
                    currentUser:response.user
                })
                console.log("Login Success")
                console.log(this.state.currentUser)
                return this.loginPass();
            })
            .catch(error => {
                this.setState({
                    message:error.message
                })
                console.log("Login Error")
                console.log(this.state.message)   
                console.log(this.state.email) 
            })

    }

    loginPass() {
           return ActiveLogin
    }

    render() {
        return (
            <div className="container">
                <br />
                <div className="columns">
                    <div className="column is-half">
                        <h1 className="title is-3">Theethawat Backend Application</h1>
                        <h4 className="subtitle is-4">Login</h4>
                        <form onSubmit={this.onSubmit}  >
                            <label className="label">Email</label>
                            <input className="input " onChange={this.onChange} type="email" name="email"></input>
                            <label className="label">Password</label>
                            <input className="input " onChange={this.onChange} type="password" name="password"></input>
                            <br />
                            <button type="submit" className="button is-info">Login</button>
                        </form>
                    </div>
                </div>
                
            </div>

        )
    }
}
export default Loginmenu