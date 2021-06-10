import React from 'react';
import s from './Profile.module.css';
import stateRoot, {messageType, PostsType} from '../../index';



const Post= (props:messageType) => {
    return (
        <div className={s.postItem}>
            <img src='https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png'/>
            {props.message}
        </div>
    );
};

export default Post;
