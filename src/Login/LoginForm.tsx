import React from 'react';
import {Field, Form, InjectedFormProps, reduxForm} from 'redux-form';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <Form onSubmit={props.handleSubmit}>
            <div><Field name={'login'} placeholder={'Login'} component={'input'}/></div>
            <div><Field name={'password'} placeholder={'Password'} component={'input'} type={'password'}/></div>
            <div><Field name={'rememberMe'} component={'input'} type="checkbox"/> remember me</div>
            <div>
                <button>Login</button>
            </div>
        </Form>

};
export const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm);

