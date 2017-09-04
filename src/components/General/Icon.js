import React, {Component} from 'react';
import {Icon} from 'antd'

class GeneraIcon extends Component {
    render() {
        return (
            <div>
                <Icon type="link" />
                <Icon type="question" style={{ fontSize: 16, color: '#08c' }} />
            </div>
        );
    }
}

export default GeneraIcon;