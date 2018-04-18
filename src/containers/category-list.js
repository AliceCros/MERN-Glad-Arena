import React, {Component} from 'react';
import axios from 'axios';

import CategoryListItems from '../components/category-list-items';

export default class CategoryList extends Component{ 
    
    constructor(props){
        super(props)
        this.state = {
            cat1: 'Epéiste',
            cat2: 'Epéiste',
            cat3: '',
            isAnimal: 'false'
        }
    }

    handleAddButton = (e) => {
        // IS ANIMAL REQUIRED?
        e.preventDefault();
        if(e.target.value === 'yes'){
            this.setState({cat3: 'Animal'});
            this.setState({isAnimal: true});
        } else {
            this.setState({cat3: ''});
            this.setState({isAnimal: false});
        }
    }
    
    handleClick = (e) => {
        e.preventDefault();
        if(e.target.name === 'cat1'){
            console.log(this.setState({cat1: e.target.value}));
        } else {
            console.log(this.setState({cat2: e.target.value}));
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.state.cat1 === this.state.cat2){
            console.log('----------------');
            console.log('------error-----');
            console.log('----------------');

        } else if(this.state.cat1 !== this.state.cat2) {
            
            if(this.state.cat3 === 'Animal'){
                axios.post(`/api/fights`, {
                    category1: this.state.cat1,
                    category2: this.state.cat2,
                    animal: true,
                    numberAnimal: 1
                })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    console.log('POST OK');
                })
                .catch(error => {
                    console.log(error.res)
                });

            } else {
                axios.post(`/api/fights`, {
                    category1: this.state.cat1,
                    category2: this.state.cat2,
                    animal: false
                })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    console.log('POST OK');
                })
                .catch(error => {
                    console.log(error.res)
                });
            }
            console.log('----------------');
            console.log('-----success----');
            console.log('----------------');
        }
    }

    render(){
        return(
            <div>
                
                <form onSubmit={this.handleSubmit} >

                    <p>Catégorie n°1 :</p>
                    <select className="btn-lg btn-info" name="cat1" onClick={this.handleClick.bind(this)}>
                    {
                        this.props.CategoryList.map(category => {
                            return <CategoryListItems key={category} category={category}/>
                        })
                    }
                    </select>
                    
                    <p>Catégorie n°2 :</p>
                    <select className="btn-lg btn-info" name="cat2" onClick={this.handleClick.bind(this)}>
                    {
                        this.props.CategoryList.map(category => {
                            return <CategoryListItems key={category} category={category}/>
                        })
                    }
                    </select>
                    
                    <p>Ajouter un animal ?</p>
                    <button className="btn btn-secondary" onClick={this.handleAddButton} value="yes" type="button" >Oui</button>
                    <button className="btn btn-secondary" onClick={this.handleAddButton} value="no" type="button" >Non</button>

                    <p></p>
                    <button className="btn-lg btn-warning" type="submit">Enregistrer le combat</button>
                
                </form>
            </div>
        )
    }
}