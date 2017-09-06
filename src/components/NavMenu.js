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

                <SubMenu key="sub-antd" title={<span><Icon type="setting"/><span>Antd</span></span>}>
                    <Menu.Item key="antd-button">
                        <NavLink to="/antd/button">Button</NavLink>
                    </Menu.Item>
                    <Menu.Item key="antd-icon">
                        <NavLink to="/antd/icon">Icon</NavLink>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="sub-github" title={<span><Icon type="setting"/><span>Github</span></span>}>
                    <Menu.Item key="github-battle">
                        <NavLink to="/github/battle">Battle</NavLink>
                    </Menu.Item>
                </SubMenu>


            </Menu>
        );
    }
}

export default NavMenu;