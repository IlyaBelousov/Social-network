import React, {createRef, LegacyRef} from 'react';
import s from '../Profile.module.css';

type AddPostType = {
    addNewPost: (postMessage: string) => void
}

const AddPost = (props: AddPostType) => {
    let addedPost: LegacyRef<HTMLTextAreaElement> | undefined = createRef();
    let createPost = () => {
        // @ts-ignore
        let text = addedPost.current.value;
        props.addNewPost(text);
        // @ts-ignore
        addedPost.current.value='';

    };

    return (
        <div className={s.newPost}>
            <textarea ref={addedPost} placeholder="New Post"/>
            <button onClick={createPost}>Send</button>
        </div>
    );
};

export default AddPost;