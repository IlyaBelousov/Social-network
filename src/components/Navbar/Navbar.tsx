import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className={s.navbar}>
            <div  className={s.navbarItem}><NavLink activeClassName={s.active} to='/profile'>Profile</NavLink></div>
            <div className={s.navbarItem}><NavLink activeClassName={s.active} to='/dialogs'>Dialogs</NavLink></div>
            <div className={s.navbarItem}><NavLink activeClassName={s.active} to='/users'>Users</NavLink></div>
            <div className={s.navbarItem}><NavLink activeClassName={s.active} to='/music'>Music</NavLink></div>
            <div className={s.navbarItem}><NavLink activeClassName={s.active} to='/settings'>Settings</NavLink></div>

        </div>
    );
};

export default Navbar;