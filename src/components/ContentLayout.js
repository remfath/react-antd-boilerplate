import React, {Component} from 'react';
import {Button, Icon} from 'antd';

class ContentLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topBtnText: props.btnText,
            topBtnIcon: props.btnIcon,
            topBtnHandler: props.btnHandler,
            headerText: props.headerText,
            headerIcon: props.headerIcon
        };
    }

    render() {
        return (
            <div>
               <Button type="primary"
                        icon={this.state.topBtnIcon}
                        onClick={this.state.topBtnHandler}>
                    {this.state.topBtnText}
                </Button>
                <div className="content-header">
                    <Icon type={this.state.headerIcon} />
                    <span className="content-title">{this.state.headerText}</span>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ContentLayout;