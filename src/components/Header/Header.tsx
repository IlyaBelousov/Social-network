import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean
    login: string | null
}

function Header(props: PropsType) {
    return (
        <header className={s.header}>

            <h2 className={s.title}>Social Network</h2>
            <div className={s.loginBlock}>
                {props.login&&props.login}
                {props.login&&<button>LogOut</button>}
            </div>
        </header>
    );
}

;

export default Header;