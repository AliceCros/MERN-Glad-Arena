import React, {Component} from 'react';

export default class FightListItems extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return ( 
            <li id={this.props.fight._id}>{this.props.fight.category1} VS {this.props.fight.category2}
                {
                    this.props.fight.animal === true
                    ? <span> and Animal</span>
                    : false
                }
            </li>
        )
    }


}