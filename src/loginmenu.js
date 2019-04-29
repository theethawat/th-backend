import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import auth from './firebase'
//import firebase from 'firebase'

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
        auth.signInWithEmailAndPassword(this.state.email,this.state.password)
            .then(response => {
                this.setState({
                    currentUser:response.user
                })
            })
            .catch(error => {
                this.setState({
                    message:error.message
                })
            })
    }

    render() {
        return (
            <div className="container">
                <br />
                <div className="columns">
                    <div className="column is-half">
                        <h1 className="title is-3">Theethawat Backend Application</h1>
                        <h4 className="subtitle is-4">Login</h4>
                        <form onSubmit={this.onSubmit} >
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