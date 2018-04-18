import React, {Component} from 'react';

import FightListItems from '../components/fight-list-items';

export default class FightList extends Component{ 
    
    constructor(props){
        super(props)
        this.state = {
        }
    }
    
    render(){
        return(
            <div>
                <p>Combats à venir</p>
                <ul>
                    {
                        this.props.FightList.map(fight => {
                            if(fight.state === 'à venir'){
                                return <FightListItems key={fight._id} fight={fight}/>
                            } else {
                                return console.log('Aucun combat à venir');
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
    
}