import NavMenu from './NavMenu';
import NavRoutes from './NavRoutes';
import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

class AppMain extends Component {
    render() {
        return (
            <Router>
                <div className="app-main">
                    <div className="app-main-nav">
                        <NavMenu/>
                    </div>
                    <div className="app-main-content">
                        <NavRoutes/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default AppMain;