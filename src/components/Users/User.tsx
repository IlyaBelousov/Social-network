import React from 'react';
import s from './User.module.css';

type UserPropsType = {
    name: string
    photoUrl:string|null
}

const User = (props: UserPropsType) => {
    return (
        <div className={s.userBlock}>
            <div className={s.userAvatar}>
                {
                    props.photoUrl?<img src={props.photoUrl}/>:''
                }
            </div>
            <div className={s.userName}>{props.name}</div>
        </div>
    );
};

export default User;