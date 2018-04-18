import React, {Component} from 'react';
import axios from 'axios';

import CategoryList from '../containers/category-list';
import FightList from '../containers/fight-list';
import CurrentFightList from '../containers/current-fight-list';
import FinishedFightList from '../containers/finished-fight-list';

export default class LudiView extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            categories: [],
            fights: []
        }
    }

    componentWillMount(){
        this.initCategories();
        this.initFightList();
    }

    initFightList(){
        axios.get(`api/fights`)
            .then(function(res){
                this.setState({fights:res.data});
                console.log("...............");
                console.log('RECUPERATION DES ENTREES FIGHT OK', res);
                console.log("...............");
                
            }.bind(this))
            .catch(error => {
                console.log(error.res)
            });
    }

    initCategories(){
        axios.get(`api/gladiators/type`)
            .then(function(res){
                this.setState({categories:res.data.slice(1,5)}); // To get all category list except for the Animal item
            }.bind(this));
    }
    
    render(){
        return (
            <div>
                <h1>Ludus area</h1>
                <div className="row block-container">
                    
                    <div className="container-fluid">
                    <h5>Ludus, configure le prochain combat</h5>
                    
                        <div className="col-md-8">
                            <CategoryList CategoryList={this.state.categories} />
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