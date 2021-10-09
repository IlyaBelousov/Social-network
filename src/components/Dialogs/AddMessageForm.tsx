import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageDataType ={
    newMessageBody:string
}

export const AddMessageForm:React.FC<InjectedFormProps<AddMessageDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder={'Enter your message'}
                component={'textarea'}
                name={'newMessageBody'} />
            <button>Send</button>
        </form>
    );
};
export const AddMessageReduxForm = reduxForm<AddMessageDataType>({
    form:'dialogAddMessageForm'
})(AddMessageForm)

