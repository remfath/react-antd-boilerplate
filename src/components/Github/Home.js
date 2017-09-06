import React from 'react';
import { Link } from 'react-router-dom';
import '../../static/scss/Battle.css'

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <h1>Go to github battle</h1>
                <Link to="/github/battle/fight" className="battle-link">Battle</Link>
            </div>
        );
    }
}

export default Home
