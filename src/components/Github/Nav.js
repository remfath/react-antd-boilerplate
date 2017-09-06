import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <ul className="battle-nav">
                <li>
                    <NavLink exact activeClassName="active" to="/github/battle">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/github/battle/fight">
                        Battle
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/github/battle/popular">
                        Popular
                    </NavLink>
                </li>
            </ul>
        );
    }
}

export default Nav;