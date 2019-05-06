import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './mycss.css'
import Homepage from "../ActiveLogin"
import firebase from '../firebase'

class AddHappiness extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user:this.props.user,
            level:0,
        }
    }

    onChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onHappinessSubmit = e =>{
        e.preventDefault()
        let today = Date()
        console.log(this.level)
        this.setState({
            level:this.level
        })
        console.log("Level in State "+this.state.level)
   
        let postRef = firebase.database().ref('happiness')
        let newPostRef=postRef.push()
        newPostRef.set({
                    date:today,
                    level:this.state.level,
                    userId:this.state.user.uid
        })
           
 
       
       
        
    }

    render() {
        return (
            <form onSubmit={this.onHappinessSubmit}>
                <label className="label">Add Your Happiness Level</label>
                <input type="number" className="input" name="level" max="10" onChange={this.onChange}/>
                <button className="button is-info" type="submit"> Add Your Happiness to Database </button>
            </form>
        )
    }
}
export default AddHappiness