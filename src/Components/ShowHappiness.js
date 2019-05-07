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
        let userStatShow = firebase.database().ref("happiness").orderByChild("date").limitToLast(5)
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
        let  healthInfoShow = healthInfo.map((member) =>
          <ul>
                <li title={"เก็บข้อมูลเมื่อ "+member.date} >Happy Level {member.level} </li>
                <li><progress className={(member.level) > 5 ?"progress mcs-w60 piccenter is-primary":" progress mcs-w60 piccenter is-warning"} value={member.level} max="10"> {member.level * 100} % </progress></li>
        </ul>
        )
        return(
            <div>
                <h3 className="title is-5">Happiness Record</h3>
                <p>Last 5 Record</p>
                {healthInfoShow}        
            </div>
        )
    }
}
export default ShowHappiness