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
            <img src="https://i.pinimg.com/originals/5f/53/5a/5f535aa08b3230f893f2a68e74eebf44.png"/>
            <div className={s.loginBlock}>
                {
                    props.isAuth ?
                        props.login
                        : <NavLink to={'/login'}>Login</NavLink>

                }
            </div>
        </header>
    );
}

;

export default Header;