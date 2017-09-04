import Home from './Home';
import Button from './General/Button';
import Icon from './General/Icon';

import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

class NavRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/general/button" component={Button}></Route>
                <Route path="/general/icon" component={Icon}></Route>
                <Route render={() => <h3>Page Not Exists</h3>}></Route>
            </Switch>
        );
    }
}

export default NavRoutes;