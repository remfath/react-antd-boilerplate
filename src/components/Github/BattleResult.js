import React from 'react';
import api from '../../utils/github_apis';
import {parse as QueryStringParse} from 'query-string';
import Loading from './Loading';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function UserResult(props) {
    const score = props.user.score;
    const profile = props.user.profile;
    const avatar = `https://github.com/${profile.login}.png?size=200`;

    return (
        <div className="user-result">
            <h1>{ props.label }</h1>
            <h2 className="user-score">Score: { score }</h2>
            <img className="user-avatar" src={ avatar } alt={profile.name}/>
            <h3 className="user-name"> { profile.name }</h3>
            <div className="user-detail">
                <p>Public Repos: { profile.public_repos }</p>
                <p>Followers: { profile.followers }</p>
            </div>
        </div>
    );
}

UserResult.propTypes = {
    user: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired
};

class BattleResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            loading: true,
            error: ''
        };
    }

    componentDidMount() {
        let users = QueryStringParse(this.props.location.search);
        const that = this;
        api.battle([
            users.playerOneName,
            users.playerTwoName
        ]).then((res) => {
            if (res === null) {
                that.setState(() => {
                    return {
                        loading: false,
                        error: 'Error, checkout your network or the github name'
                    }
                });
            }
            that.setState(() => {
                return {
                    users: res,
                    loading: false,
                    error: ''
                }
            });
        });
    }

    render() {
        if (this.state.error) {
            return <div className="error">{ this.state.error }</div>;
        }

        if (this.state.loading) {
            return <Loading/>;
        }

        return (
            <div className="battle-result-container">
                <div className="result-show">
                    <UserResult user={this.state.users[0]} label="Winner"/>
                    <UserResult user={this.state.users[1]} label="Loser"/>
                </div>
                <Link to="/battle" className="battle-again">Battle Again</Link>
            </div>
        )
    }
}

export default BattleResult;