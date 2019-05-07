import React, {Component} from 'react'
import 'bulma/css/bulma.css'
import firebase from '../firebase'
import './mycss.css'

class ShowHappiness extends Component {
    constructor(props){
        super(props)
        this.state = {
            happiness: Array(
                {level:'',date:''}
            ),
        }
    }
    
    componentDidMount(){
        let userStatShow = firebase.database().ref("happiness").orderByChild("level")
        userStatShow.on('value', snapshot => {
            let arrayHappy = []
            snapshot.forEach(childSnapshot=> {
                let childKey = childSnapshot.key
                let childData = childSnapshot.val()
               arrayHappy.push(childData) 
            }) 
            this.setState({
                    happiness: arrayHappy
            })
        })

    }
    
    render(){
        let healthInfo = this.state.happiness
        console.log(healthInfo)
        let healthInfoShow = healthInfo.map((member) =>
          <ul>
            <li>Date and Time : {member.date} </li>
            <li>happiness : {member.level} </li>
        </ul>
        )
        console.log(healthInfo)
        return(
            <div>
                {healthInfoShow}        
            </div>
        )
    }
}
export default ShowHappiness