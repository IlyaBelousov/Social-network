import React from 'react';
import s from './User.module.css';

type UserPropsType = {
    name: string

}


const User = (props: UserPropsType) => {
    return (
        <div className={s.userBlock}>
            <div className={s.userAvatar}>
                <img src="https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png"/>
            </div>
            <div className={s.userName}>{props.name}</div>
        </div>
    );
};

export default User;