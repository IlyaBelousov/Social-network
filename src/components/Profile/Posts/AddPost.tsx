import React from 'react';
import s from '../Profile.module.css';
import {reduxForm, Field, InjectedFormProps} from "redux-form";



export type AddPostFormData = {
    addPost: string
}

export const AddPost: React.FC<InjectedFormProps<AddPostFormData>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'addPost'} component={'textarea'}/>
            <button>Add post</button>
        </form>
    )
};
export const AddPostReduxForm = reduxForm<AddPostFormData>({
    form: 'addPostForm'
})(AddPost)


