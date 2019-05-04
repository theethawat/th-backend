import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import firebase from './firebase'
import LoginMenu from './Components/Loginmenu'
import Homepage from './ActiveLogin'
class Loginmenu extends Component {
    //constructor like oop
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            currentUser: null,
            message: '',
            handlingpage:''
        }
    }
    
    //Method or function
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    currentUser: user
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
        this.setState({
            email: this.props.email,
            password: this.props.password
        })
        console.log("Login Methodology Start") 

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(response => {
                this.setState({
                    currentUser: response.user
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

    // handlingMethod = () => {
    //     if(this.state.currentUser==null){
    //         this.setState({
    //             handlingpage:"Hello"
    //         })
    //     }
    //     else{
    //         this.setState({
    //             handlingpage:"No login"
    //         })
    //     }
    // }

    render(){
        return(
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