import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class PlayerInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        let userName = e.target.value;
        this.setState(function () {
            return {
                username: userName
            };
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.props.id, this.state.username);
    }

    render() {
        return (
            <div className="player">
                <h1 className="player-name">
                    { this.props.label.toUpperCase() }
                </h1>
                <input className="player-input" type="text"
                       placeholder={`Enter ${this.props.label} github name`}
                       autoComplete="off"
                       value={this.state.username}
                       onChange={this.handleInputChange}/>
                <button className="player-submit" onClick={ this.handleSubmit } disabled={!this.state.username}>
                    Submit
                </button>
            </div>
        );
    }
}


PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};


class PlayerShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset() {
        this.props.onReset(this.props.id);
    }

    render() {
        return (
            <div className="player-info">
                <img className="player-avatar" src={ this.props.avatar } alt={this.props.username}/>
                <div className="player-name">@{ this.props.username }</div>
                <div className="player-reset" onClick={this.handleReset}>reset</div>
            </div>
        )
    }
}

PlayerShow.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired
};


class Battle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerOneName: '',
            playerOneAvatar: null,
            playerTwoName: '',
            playerTwoAvatar: null
        };
        this.updateUserInfo = this.updateUserInfo.bind(this);
        this.resetUserInfo = this.resetUserInfo.bind(this);
    }

    updateUserInfo(userId, name) {
        this.setState(function () {
            let newState = {};
            newState[userId + 'Name'] = name;
            newState[userId + 'Avatar'] = `https://github.com/${name}.png?size=200`;
            return newState;
        });
    }

    resetUserInfo(userId) {
        this.setState(function () {
            let newState = {};
            newState[userId + 'Name'] = '';
            newState[userId + 'Avatar'] = null;
            return newState;
        });
    }

    render() {
        return (
            <div className="battle-container">
                <div className="battle-users">
                    { !this.state.playerOneName ?
                        <PlayerInput id="playerOne"
                                     label='player one'
                                     onSubmit={this.updateUserInfo}/> :
                        <PlayerShow username={this.state.playerOneName}
                                    avatar={this.state.playerOneAvatar}
                                    id="playerOne"
                                    onReset={this.resetUserInfo}/>}


                    { !this.state.playerTwoName ?
                        <PlayerInput id="playerTwo"
                                     label='player two'
                                     onSubmit={this.updateUserInfo}/> :
                        <PlayerShow username={this.state.playerTwoName}
                                    avatar={this.state.playerTwoAvatar}
                                    id="playerTwo"
                                    onReset={this.resetUserInfo}/>}
                </div>

                { this.state.playerOneName && this.state.playerTwoName &&
                <Link to={{
                    pathname: this.props.match.url + '/results',
                    search: `?playerOneName=${this.state.playerOneName}&playerTwoName=${this.state.playerTwoName}`
                }} className="battle-btn">Battle</Link>
                }
            </div>
        )
    }
}

export default Battle