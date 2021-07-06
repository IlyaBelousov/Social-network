import React, {ChangeEvent, createRef, KeyboardEvent} from 'react';
import s from '../Profile.module.css';
import {AddNewPostActionType, ChangeNewPostActionType} from '../../../redux/state';



type AddPostType = {
    dispatch:(action:AddNewPostActionType|ChangeNewPostActionType)=>void
    newPostText: string
}

const AddPost = (props: AddPostType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        if(text){
            props.dispatch({type:'CHANGE-NEW-POST-TEXT',newText:text});
        }

    };

    let createPost = () => {
            props.dispatch({type:'ADD-POST'});
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