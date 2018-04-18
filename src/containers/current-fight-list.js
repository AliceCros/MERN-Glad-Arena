import React, {Component} from 'react';
import axios from 'axios';

import CurrentFightListItems from '../components/current-fight-list-items';

export default class CurrentFightList extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            id: []
        }
    }

    componentWillMount(){
        this.props.FightList.map(id => {
            this.setState({id: id._id});
            return true
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.FightList.map(id => {
            if(id.state === "en cours"){
                let currentId = id._id
                axios.put(`api/fights/${currentId}`, {
                    state: 'fini'
                })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    console.log('PUT OK');
                })
                .catch(error => {
                    console.log(error.res)
                });
            }
            return true
        });
    }

    render(){
        return (
            <div>
                <p>Combats en cours</p>
                <ul>
                    {
                        this.props.FightList.map(fight => {
                            if(fight.state === 'en cours'){
                                return <CurrentFightListItems key={fight._id} fight={fight}/>
                            } else {
                                return console.log('Aucun combat en cours');
                            }
                        })
                    }
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>Terminer les combats</button>
                </ul>
            </div>
        );
    }
}