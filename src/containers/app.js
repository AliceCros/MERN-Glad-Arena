import React, {Component} from 'react';
import {Route, Router} from 'react-router-dom';
import {createBrowserHistory} from "history";

import HomeView from '../views/home-view';
import LudiView from '../views/ludi-view';
import CesarView from '../views/cesar-view';

let history = createBrowserHistory();

class App extends Component {    

    render(props){
        
            return (
            <Router history={history}>
                <div>
                    <main>
                        <Route exact path="/" component={HomeView} />
                        <Route exact path="/ludi" component={LudiView} />
                        <Route exact path="/cesar" component={CesarView} />
                    </main>  
                </div>
           </Router>
    )
    }
   
}

export default App;