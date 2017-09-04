import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;

class NavMenu extends Component {
    handleClick() {
        console.info(123);
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{width: 240}}
                defaultSelectedKeys={['home']}
                defaultOpenKeys={[]}
                mode="inline"
                theme="dark"
            >
                <Menu.Item key="home">
                    <NavLink exact to="/"> <Icon type="mail"/>Home</NavLink>
                </Menu.Item>

                <SubMenu key="sub-general" title={<span><Icon type="setting"/><span>General</span></span>}>
                    <Menu.Item key="general-button">
                        <NavLink to="/general/button">Button</NavLink>
                    </Menu.Item>
                    <Menu.Item key="general-icon">
                        <NavLink to="/general/icon">Icon</NavLink>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    }
}

export default NavMenu;