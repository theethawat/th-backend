import React, {Component} from "react";
import 'bulma/css/bulma.css'
import LoginMenu from "./Loginmenu";
class ActiveLogin extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:this.props.value
        }
    }
    render(){
        return(
            <div className="container">
                <h4>Welcome</h4>
                <h5>this.state.user</h5>
            </div>
        )
    }
}
export default ActiveLogin