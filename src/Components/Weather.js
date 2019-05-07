import React, { Component } from "react";
import 'bulma/css/bulma.css'
import axios from 'axios'
import _ from 'lodash'

class Weather extends Component{
    constructor(props){
        super(props)
        this.state = {
            weather:''
        }
    }
/*COMING SOON*/
    componentDidMount(){
        axios.get('https//api.openweathermap.org/data/2.5/weather?zip=90110,th')
        .then(response => {
            this.setState({
                wether:response.data.result
            })
            console.log(response.data.result)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render(){
    return(
        <div>
            
        </div>
    )
}
}
export default Weather