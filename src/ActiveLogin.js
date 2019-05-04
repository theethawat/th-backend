import React, {Component} from "react";
import 'bulma/css/bulma.css'
import LoginMenu from "./LoginControl";
class ActiveLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentUser: this.props.currentUser,
        }
      }
    render(){
    
        return(
            <div className="container">
                <h4>Welcome</h4>
                <h5>Now User is {this.state.currentUser} Props Value is {this.props.currentUser} </h5>
            </div>
        )
    }
}
export default ActiveLogin