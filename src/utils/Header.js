import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Icon from 'utils/Icon';
import moment from 'moment';
import {Routes} from 'config/Routes';

class Header extends Component {
    render() {

        const menu = (
            <Menu>
                <Menu.Item>
                    <div>
                        Name LastName
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <div>
                        Profile
                    </div>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className="header-style-container">
                <div className="parent-row parent-h-center parent-v-center">
                    <Icon icon="ICON_CLOCK" className="icon-clock mr-10"/>
                    <div className="date-time-container">
                        {moment().format('DD MMMM')}.<span className="time-format-style">{' '}{moment().format('kk:mm')}</span>
                    </div>
                </div>
                <div className="parent-row parent-h-space-between parent-v-center module-container">
                    <div className="title-style">
                        Watch<span className="this">This</span>
                    </div>
                    <div className="parent-row parent-v-center">
                        {/* dropdown-style */}
                        <Dropdown overlay={menu} className="clickable font-size-14">
                            <div className="parent-row parent-v-center">
                                <div className="mr-7 font-style-dp">
                                    Name LastName <DownOutlined className="font-size-11 ml-3"/>
                                </div>
                                <Icon className="icon-size-22" icon="ICON_PERSON"/>
                            </div>
                        </Dropdown>
                        <div className="strait-line mlr-15"></div>
                        <div onClick={()=>this.props.history.push(Routes.Search)}>
                            <Icon className="icon-size-22 clickable" icon="ICON_SEARCH"/>
                        </div>
                    </div>
                </div>
                {/* <hr /> */}
            </div>
        );
    }
}

export default Header;