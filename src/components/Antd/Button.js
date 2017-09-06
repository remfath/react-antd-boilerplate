import React, {Component} from 'react';
import {Button} from 'antd'

class GeneralButton extends Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        );
    }
}

export default GeneralButton;