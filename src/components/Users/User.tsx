import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './User.module.css';

type UserPropsType = {
    name: string
    photoUrl: string | null
    status?: string
    id: number
}

const User = (props: UserPropsType) => {
    return (
        <div className={s.userBlock}>
            <div className={s.userAvatar}>
                <NavLink to={'/profile/' + props.id}>
                    <img alt={'avatar'}
                         src={props.photoUrl ? props.photoUrl : 'https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png'}/>
                </NavLink>
            </div>
            <div className={s.userName}>{props.name}</div>
            <p className={s.status}>{props.status}</p>
        </div>
    );
};

export default User;