import React from 'react';
import s from './Dialogs.module.css'
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageDataType = {
    newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageDataType>> = (props) => {
    return (
        <Form className={s.addMessageForm} onSubmit={props.handleSubmit}>
            <Field
                placeholder={'Enter your message'}
                component={'textarea'}
                name={'newMessageBody'}/>
            <button>Send</button>
        </Form>
    );
};
export const AddMessageReduxForm = reduxForm<AddMessageDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

