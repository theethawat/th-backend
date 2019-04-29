import React, { Component } from 'react';
import 'bulma/css/bulma.css'
class Loginmenu extends Component {
    render() {
        return (
            <div className="container">
                <br />
                <div className="columns">
                    <div className="column is-half">
                        <h1 className="title is-3">Theethawat Backend Application</h1>
                        <h4 className="subtitle is-4">Login</h4>
                        <form>
                            <label className="label">Email</label>
                            <input className="input " type="email" name="email"></input>
                            <label className="label">Password</label>
                            <input className="input " type="password" name="password"></input>
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