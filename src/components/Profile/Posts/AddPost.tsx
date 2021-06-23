import React, {ChangeEvent, createRef, KeyboardEvent} from 'react';
import s from '../Profile.module.css';


type AddPostType = {
    addNewPost: (postMessage: string) => void
    newPostText: string
    ChangeNewPostText: (newText: string) => void
}

const AddPost = (props: AddPostType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.ChangeNewPostText(event.currentTarget.value);

    };
    let addedPost = createRef<HTMLInputElement>();
    let createPost = () => {

        let text = addedPost.current?.value;
        if (text) {
            if (text.trim() === '') {
                return;
            }
            props.addNewPost(text);
            addedPost.current!.value = '';
        }

    };

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createPost();
        }
    };


    return (
        <div className={s.newPost}>
            <input onKeyPress={onKeyPressHandler} ref={addedPost} onChange={onChangeHandler}/>
            <button onClick={createPost}>Send</button>
        </div>
    );
};

export default AddPost;