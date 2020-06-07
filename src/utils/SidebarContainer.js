import React, { Component } from 'react';
import {Routes} from 'config/Routes';
import Icon from 'utils/Icon';
import { NavLink } from 'react-router-dom';

class SidebarContainer extends Component {

    render() {
        const {pathname} = this.props.location;
        return (
            <div className="sidebar-style-container pt-60 pb-15 parent-col parent-h-space-between">
                <div>
                    <NavLink exact activeClassName="active-link" to={Routes.Home} className="inactive-link mb-25 parent-col parent-v-center">
                        <Icon className="sidebar-icon" icon={pathname === Routes.Home ? 'ICON_HOME_ACTIVE' :'ICON_HOME_INACTIVE'}/>
                        <div>Home</div>
                    </NavLink>
                    <NavLink exact activeClassName="active-link" to={Routes.TvSeries} className="inactive-link mb-25 parent-col parent-v-center">
                        <Icon className="sidebar-icon mb-5" icon={pathname === Routes.TvSeries ? 'ICON_TV_SERIES_ACTIVE' :'ICON_TV_SERIES_INACTIVE'}/>
                        <div>TV Series</div>
                    </NavLink>
                    <NavLink exact activeClassName="active-link" to={Routes.Movies} className="inactive-link parent-col parent-v-center">
                        <Icon className="sidebar-icon mb-5" icon={pathname === Routes.Movies ? 'ICON_MOVIES_ACTIVE' :'ICON_MOVIES_INACTIVE'}/>
                        <div>Movies</div>
                    </NavLink>
                </div>
                <div className="parent-col parent-v-center inactive-link clickable">
                    <Icon className="sidebar-icon-logout mb-5" icon='ICON_LOGOUT'/>
                    <div className="ml-5">Logout</div>
                </div>
            </div>
        );
    }
}

export default SidebarContainer;