import React from 'react';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Nav from './Nav';
import NotFound from './NotFound';
import BattleResult from './BattleResult';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'


import '../../static/scss/Battle.css';

class GithubBattle extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Switch>
                        <Route exact path="/github/battle" component={Home}/>
                        <Route exact path="/github/battle/fight" component={Battle}/>
                        <Route path="/github/battle/fight/results" component={BattleResult}/>
                        <Route path="/github/battle/popular" component={Popular}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default GithubBattle;
