import React, {Component} from 'react';
import '../static/scss/AppHeader.css';

class AppHeader extends Component {
    static handleLogout() {
        alert('logout!');
    }

    render() {
        return (
            <div className="app-header">
                <h2 className="header-logo">{ process.env.REACT_APP_APP_NAME }</h2>
                <div className="header-user">
                    <p>{ process.env.REACT_APP_USER_NAME }</p>
                    <p className="header-user-delimiter">|</p>
                    <p className="logout-btn"  onClick={ AppHeader.handleLogout }>Logout</p>
                </div>
            </div>
        );
    }
}

export default AppHeader;