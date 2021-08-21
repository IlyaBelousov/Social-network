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
                <User
                id={props.id}
                    photoUrl={"https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png"} name={props.username}/>
            }
            {props.message}

        </div>
    );
};

export default Post;
