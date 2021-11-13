import React from 'react';
import s from './Login.module.css';
import {FormDataType, ReduxLoginForm} from './LoginForm';
import {connect} from "react-redux";
import {LogIn, SetAuthDataThunk} from "../redux/auth-reducer";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";

type MapStateToPropsType = {
    isInitialised: boolean
}
type MapDispatchToPropsType = {
    LogIn: (password: string, email: string, rememberMe?: boolean) => void
    SetAuthDataThunk: () => void
}
const LoginContainer = (props: MapDispatchToPropsType & MapStateToPropsType) => {
    const onSubmit = (formData: FormDataType) => {
       props.LogIn(formData.password, formData.login, formData.rememberMe)
    };
    if (props.isInitialised) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.loginContainer}>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>;
};
const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isInitialised: state.auth.isInitialised
    }
}
export const Login = connect(MapStateToProps, {LogIn, SetAuthDataThunk})(LoginContainer)


