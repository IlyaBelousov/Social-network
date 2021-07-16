import React from 'react';
import s from '../Profile.module.css';
import User from '../../Users/User';
type MessageType={
    id: number
    username: string
    message: string
}

const Post = (props: MessageType) => {
    return (
        <div className={s.postItem}>
            {
                <User name={props.username}/>
            }
            {props.message}

        </div>
    );
};

export default Post;
