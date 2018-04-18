import React, {Component} from 'react';


export default class GladiatorListItems extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <option value={this.props.name}>{this.props.name}</option>
        )
    }
}