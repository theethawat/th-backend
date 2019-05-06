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
            level:''
        }
    }

    
    onHappinessSubmit = e =>{
        e.preventDefault()
        let today = Date()
        this.setState({
            level:this.level
        })

          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(()=>{
                console.log("You are in Session")
                firebase.database().ref('happiness/2').set({
                    date:today,
                    level:this.state.level,
                    userId:this.state.user.uid
                })
            })
            .catch(error=>{
                console.log(Error + error.code)
            })
 
       
       
        
    }

    render() {
        return (
            <form onSubmit={this.onHappinessSubmit}>
                <label className="label">Add Your Happiness Level</label>
                <div className="select is-info">
                    <select name="levelInput">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <br />
                    <button className="button is-info" type="submit"> Add Your Happiness to Database </button>
                </div>
            </form>
        )
    }
}
export default AddHappiness