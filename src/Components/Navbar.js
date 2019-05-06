import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './mycss.css'
class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser:this.props.user,
        }
    }

    render() {
        console.log(this.state.currentUser)
        return (
            <div>
                <nav className="navbar is-light">
                    <div className="navbar-brand">
                        <a className="nav-item">
                            <h1 className="title is-5 mcs-logo"> Theethawat Managing Application </h1>
                        </a>
                    </div>
                  
                        <a className="navbar-item">
                            Overview 
                        </a>
                  
                    <div className="navbar-end">
                        <a className="navbar-item">
                            {this.props.username}
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar