import React from 'react';
import s from './Login.module.css';
import {FormDataType, ReduxLoginForm} from './LoginForm';
import {connect} from "react-redux";

import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import {setLogIn} from "../redux/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setLogIn: (password: string, email: string, rememberMe?: boolean) => void
}
const LoginContainer = (props: MapDispatchToPropsType & MapStateToPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.setLogIn(formData.password, formData.login, formData.rememberMe)
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.loginContainer}>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>;
};
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const Login = connect(MapStateToProps, {setLogIn})(LoginContainer)


