import React, {Component} from 'react';

import FinishedFightListItems from '../components/current-fight-list-items';

export default class FinishFightList extends Component {
    
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>
                <p>Combats terminés</p>
                <ul>
                    {
                        this.props.FightList.map(fight => {
                            if(fight.state === 'fini'){
                                return <FinishedFightListItems key={fight._id} fight={fight}/>
                            } else {
                                return console.log('Aucun combat terminé');
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}