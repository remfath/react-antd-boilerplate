import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }

    componentDidMount() {
        let stopper = this.props.text + '...';
        const that = this;
        this.interval = window.setInterval(() => {
            if (that.state.text === stopper) {
                that.setState(() => {
                    return {
                        text: that.props.text
                    }
                });
            } else {
                that.setState((preState) => {
                    return {
                        text: preState.text + '.'
                    }
                });
            }
        }, 300);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <div className="loading">
                <p>{ this.state.text }</p>
            </div>
        );
    }
}

Loading.defaultProps = {
    text: 'Loading'
};

Loading.propTypes = {
    text: PropTypes.string.isRequired
};

export default Loading;