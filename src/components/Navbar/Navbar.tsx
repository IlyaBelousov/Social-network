import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className={s.navbar}>
            <div className={s.navbarItem}><NavLink to='/profile'>Profile</NavLink></div>
            <div className={s.navbarItem}><NavLink to='/dialogs'>Dialogs</NavLink></div>
            <div className={s.navbarItem}><NavLink to='/music'>Music</NavLink></div>
            <div className={s.navbarItem}><NavLink to='/settings'>Settings</NavLink></div>

        </div>
    );
};

export default Navbar;