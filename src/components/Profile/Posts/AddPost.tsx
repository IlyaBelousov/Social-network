import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from '../Profile.module.css';
import {AddNewPostActionCreator, ChangeNewPostTextActionCreator, ProfileActionType} from '../../../redux/state';

type AddPostType = {
    dispatch: (action: ProfileActionType) => void
    newPostText: string
}

const AddPost = (props: AddPostType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        if (text) {
            props.dispatch(ChangeNewPostTextActionCreator(text));
        }

    };

    let createPost = () => {
        props.dispatch(AddNewPostActionCreator());
    };

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createPost();
        }
    };


    return (
        <div className={s.newPost}>
            <input onKeyPress={onKeyPressHandler} value={props.newPostText} onChange={onChangeHandler}/>
            <button onClick={createPost}>Send</button>
        </div>
    );
};

export default AddPost;