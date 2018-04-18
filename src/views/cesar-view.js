import React, { Component } from 'react';
import axios from 'axios';

import GladiatorList from '../containers/gladiator-list';
import CurrentFightList from '../containers/current-fight-list';
import FightList from '../containers/fight-list';
import FinishedFightList from '../containers/finished-fight-list';

export default class CesarView extends Component{

    constructor(props){
        super(props);
        this.state = {
            categories: [],
            fights: [],
            gladiatorsnames: [],
            firstfight: []
        }
    }

    componentWillMount(){
        this.getFirstFight();
        this.initGladiatorsNames();
        this.initCategoriesNames();
        this.initFightList();
    }

    getFirstFight = () => {
        axios.get(`api/fights/first`)
            .then(function(res){
                this.setState({firstfight: res.data})
            }.bind(this))
            .catch(error => {
                console.log(error.res)
            });
    }

    initGladiatorsNames(){
        axios.get(`api/gladiators/nameBytype`)
            .then(function(res){
                this.setState({gladiatorsnames:res.data})
            }.bind(this))
            .catch(error => {
                console.log(error.res)
            });
    }

    initCategoriesNames(){
        axios.get(`api/gladiators/type`)
            .then(function(res){
                this.setState({categories:res.data});
            }.bind(this))
            .catch(error => {
                console.log(error.res)
            });
    }

    initFightList(){
        axios.get(`api/fights`)
            .then(function(res){
                this.setState({fights:res.data});
            }.bind(this))
            .catch(error => {
                console.log(error.res)
            });
    }
    
    render(){
        return (
            <div> 
                <h1>Caesar area</h1>
                <div className="row block-container">
                    <div className="container-fluid">
                        <h5>Ô César, choisis les gladiateurs qui combattront pour ta gloire</h5>
                        
                        <div className="col-md-8">
                            <GladiatorList GladiatorList={this.state.gladiatorsnames} FirstFight={this.state.firstfight} />
                        </div>
                        
                        <div className="col-md-4">
                            <CurrentFightList FightList={this.state.fights} />
                            <FightList FightList={this.state.fights}/>
                            <FinishedFightList FightList={this.state.fights}/>
                        </div>
                    
                    </div>
                </div>
            </div>
            
        )
    }
}