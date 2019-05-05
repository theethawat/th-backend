import React, {Component} from "react";
import 'bulma/css/bulma.css'
class ActiveLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
          currentUser: this.props.value,
        }
      }
    render(){
    
        return(
            <div className="container">
                <h4>Welcome</h4>
                <h5>Now User is {this.state.currentUser.email}  </h5>
            </div>
        )
    }
}
export default ActiveLogin