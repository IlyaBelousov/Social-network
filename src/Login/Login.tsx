import React from 'react';
import s from './Login.module.css';
import {FormDataType, ReduxLoginForm} from './LoginForm';


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    };
    return <div className={s.loginContainer}>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>;
};

