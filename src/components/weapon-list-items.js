import React, {Component} from 'react';


export default class WeaponListItems extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <select className="btn-lg btn-muted" name="Epéiste">
                <option value="Epée à une main">Epée à une main</option>
                <option value="Epée à deux mains">Epée à deux mains</option>
            </select>
        )
    }
}