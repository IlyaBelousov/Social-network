import React from 'react';
import s from '../Profile.module.css';
import {messageType} from '../../../state';
import User from '../../Users/User';


const Post = (props: messageType) => {
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
