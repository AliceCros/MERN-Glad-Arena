import React, { Component } from 'react';

export default class HomeView extends Component {
    
    render() {
    
        return (
            <div>
                <h1>Gods of the arena</h1>
            
                <div className="row"> 
                    <a href="./ludi"><button className="col-md-4 btn-lg btn-info" >Ludi area</button></a>
                    <a href="./cesar"><button className="col-md-4 btn-lg btn-info" >Cesar area</button></a>
                </div>

            </div>       
        )
    }
}