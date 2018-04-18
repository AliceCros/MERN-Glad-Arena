import React, {Component} from 'react';
import axios from 'axios';

import GladiatorListItems from '../components/gladiator-list-items';
import WeaponListItems from '../components/weapon-list-items';

export default class GladiatorList extends Component {

    constructor(props){
        super(props);
        this.state = {
            animalBonus: Number(1),
            showHideButton: ''
        }
    }

    componentWillMount(){
        this.setState({showHideButton: "button-false"});
    }

    toggleButton = (e) => { 
        // SHOW INPUT/BUTTON DEPENDING ON CAESAR's ANSWER (ANIMAL SECTION)
        let css;
        if(e.target.value === "yes"){
            css = "display-true";
        } else {
            css = "display-false";
            this.setState({animalBonus: Number(0)});
        }
        this.setState({showHideButton: css});
        return css;
    }

    handleInput = (e) => {
        // GET NUMBER OF ANIMALS REQUIRED
        e.preventDefault();
        this.setState({animalBonus: Number(e.target.value)});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.FirstFight._id;
        // AJAX put request to Fights DB
        axios.put(`/api/fights/${id}`, {
            state: 'en cours',
            numberAnimal: this.state.animalBonus
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            console.log('PUT OK');
        })
        .catch(error => {
            console.log(error.res)
        });

        // HANDLE GLADIATOR's AVAILIBILITY
        
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <p>Choix du gladiateur de catégorie<span> {this.props.FirstFight.category1}</span>*</p>
                    <select className="btn-lg btn-info" name={this.props.FirstFight.category1}>
                        {
                            this.props.GladiatorList.map(name => {
                                if(name.type === this.props.FirstFight.category1){
                                    return <GladiatorListItems key={name._id} category={this.props.FirstFight.category1} name={name.name} />
                                } else {
                                    return false
                                }
                            })
                        }
                    </select>
                    <div>
                    {
                        this.props.FirstFight.category1 === "Epéiste"                         
                            ? 
                            <div>
                                <p>Choix des armes de l'Epéiste</p>
                                 <WeaponListItems key={this.props.FirstFight._id} category={this.props.FirstFight.weapon} />
                            </div>
                             : console.log('Not a swordsman')
                    }
                    </div>
                    <p>Choix du gladiateur de catégorie<span> {this.props.FirstFight.category2}</span>*</p>
                    <select className="btn-lg btn-info" category={this.state.cat2} name={this.props.FirstFight.category2}>
                    {
                        this.props.GladiatorList.map(name => {
                            
                            if(name.type === this.props.FirstFight.category2){
                                return <GladiatorListItems key={name._id} category={this.props.FirstFight.category2} name={name.name} />
                            } else {
                                return false
                            }

                        })
                    }
                    </select>
                    <div>
                    {
                        this.props.FirstFight.category2 === "Epéiste"                         
                            ? 
                            <div>
                                <p>Choix des armes de l'Epéiste</p>
                                 <WeaponListItems key={this.props.FirstFight._id} category={this.props.FirstFight.weapon} />
                            </div>
                             : console.log('Not a swordsman')
                    }
                    </div>

                    
                        {(this.props.FirstFight.animal === true 
                            ? <div>
                                <p>Choix de la catégorie<span> Animal</span></p>
                                <select className="btn-lg btn-info" category={this.props.FirstFight.animalName} name="cat3">

                                    {
                                        this.props.GladiatorList.map(name => {
                                            if(name.type === 'Animal'){
                                                    return <GladiatorListItems key={name._id} category={name.type} name={name.name} />
                                               
                                            } else {
                                                return console.log("Pas de troisième catégorie sélectionnée par le ludus")
                                            }
                                        })
                                    }
                                </select>
                            </div>
                            
                            : " " )}
          
                    <p>Souhaites-tu ajouter un animal, ô César ?</p>
                    <button className="btn btn-secondary" value="yes" type="button" onClick={this.toggleButton} >Oui</button>
                    <button className="btn btn-secondary" value="no" type="button" onClick={this.toggleButton} >Non</button>
                    
                    <p></p>
                    <div className={this.state.showHideButton}>
                        <p>Combien souhaites-tu en ajouter ?</p>
                        <input className="form-control" type="number" onClick={this.handleInput} placeholder="Nombre ?" />
                    </div>
                    
                    <button className="btn-lg btn-warning" type="submit">Valider le combat</button>
                
                </form>
                
            </div>
        )
    }
}