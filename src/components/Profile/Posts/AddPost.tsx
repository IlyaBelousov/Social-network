import React, {createRef, KeyboardEvent, RefObject} from 'react';
import s from '../Profile.module.css';

type AddPostType = {
    addNewPost: (postMessage: string) => void
}

const AddPost = (props: AddPostType) => {
    let addedPost: RefObject<HTMLInputElement> = createRef();
    let createPost = () => {
        let text = addedPost.current!.value;
        if(text.trim()===''){
            return
        }
        props.addNewPost(text);
        addedPost.current!.value = '';
    };

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createPost()
        }
    };

    return (
        <div className={s.newPost}>
            <input onKeyPress={onKeyPressHandler} ref={addedPost} placeholder="New Post"/>
            <button onClick={createPost}>Send</button>
        </div>
    );
};

export default AddPost;