import Home from './Home';
import Button from './Antd/Button';
import Icon from './Antd/Icon';
import GithubBattle from './Github/GithubBattle';

import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

class NavRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/antd/button" component={Button}></Route>
                <Route path="/antd/icon" component={Icon}></Route>
                <Route path="/github/battle" component={GithubBattle}></Route>
                <Route render={() => <h3>Page Not Exists</h3>}></Route>
            </Switch>
        );
    }
}

export default NavRoutes;