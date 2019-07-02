import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from '../constants/routes';


const Nav = ({currentUser, logoutUser}) => 
<div className="navBox">
    <NavLink activeClassName="" className="navBtn" to={routes.HOME}>HOME</NavLink>
    <NavLink activeClassName="" className="navBtn" to={routes.INFO}>INFO</NavLink>
    { currentUser &&
    <NavLink className="navBtn" to={routes.HOME} onClick={logoutUser}>LOGOUT</NavLink> 
    }
    </div>

export default Nav