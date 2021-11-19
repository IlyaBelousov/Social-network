import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {logOut} from "../../redux/auth-reducer";
import {connect} from "react-redux";


type MapDispatchToPropsType = {
    logOut: () => void
}

type PropsType = {
    login?: string | undefined
    isAuth: boolean
} & MapDispatchToPropsType

function Header(props: PropsType) {
    const onLogOutHandler = () => {
        props.logOut()
    }
    return (
        <header className={s.header}>
            <h2 className={s.title}>Social Network</h2>
            <div className={s.loginBlock}>
                {props.isAuth && props.login}
                {props.isAuth ? <button onClick={onLogOutHandler}>LogOut</button> :
                    <NavLink to={'/login'}>
                        <button>LogIn</button>
                    </NavLink>}
            </div>
        </header>
    );
}

export default connect(null, {logOut})(Header)