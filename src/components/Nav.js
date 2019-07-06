import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from '../constants/routes';


const Nav = ({currentUser, logoutUser}) => 
<div className="navBox">
    <NavLink activeClassName="" to={routes.LIFT}>LIFT</NavLink>
    <NavLink activeClassName="" to={routes.EAT}>EAT</NavLink>
    <NavLink activeClassName="" to={routes.BLOG}>BLOG</NavLink>
    { currentUser &&
    <NavLink to={routes.HOME} onClick={logoutUser}>LOGOUT</NavLink> 
    }
    </div>

export default Nav