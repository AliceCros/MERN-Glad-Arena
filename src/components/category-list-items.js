import React, {Component} from 'react';

export default class CategoryListItem extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return (
                
            <option value={this.props.category}>{this.props.category}</option>
        )
    }


}