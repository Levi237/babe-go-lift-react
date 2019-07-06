import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from '../constants/routes';


const Nav = ({currentUser, logoutUser}) => 
<div className="navBox">
    <NavLink activeClassName="" className="navBtn" to={routes.LIFT}>LIFT</NavLink>
    <NavLink activeClassName="" className="navBtn" to={routes.EAT}>EAT</NavLink>
    { currentUser &&
    <NavLink className="navBtn" to={routes.HOME} onClick={logoutUser}>LOGOUT</NavLink> 
    }
    </div>

export default Nav