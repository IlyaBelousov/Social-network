import React, {useEffect} from 'react';
import User from './User';
import s from './User.module.css';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {FollowAC, SetUsersAC, UserDataType, UserStateType} from '../../redux/users-reducer';
import axios from 'axios';

type UsersPropsType = UsersMapStateToPropsType & UsersMapDispatchToPropsType

type UsersMapStateToPropsType = {
    items: Array<UserDataType>
}
type UsersMapDispatchToPropsType = {
    follow: (userID: number) => void
    setUsers: (items: Array<UserDataType>) => void
}

export const Users = (props: UsersPropsType) => {

    if (props.items.length === 0) {
        axios.get<{ items: UserDataType[] }>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });
    }
    return (
        <div>

            {
                props.items.map(u => {
                    const FollowHandler = () => {
                        props.follow(u.id);
                    };
                    return (
                        <div key={u.id} className={s.wrapper}>
                            <div className={s.container}>
                                <div className={s.usersBlock}>
                                    <User key={u.id} name={u.name} photoUrl={"https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png"}/>
                                    <p className={s.status}>{u.status}</p>
                                    <div>
                                        <button
                                            onClick={FollowHandler}
                                            className={s.userButton}>
                                            {u.followed ? 'UNFOLLOW' : 'FOLLOW'}
                                        </button>
                                    </div>
                                </div>
                                <div className={s.location}>
                                    {/*<div className={s.country}>{u.location.country}</div>
                                    <div className={s.city}>{u.location.city}</div>*/}
                                </div>
                            </div>
                        </div>);
                })
            }
        </div>
    );
};

export const UsersMapStateToProps = (state: AppStateType): UsersMapStateToPropsType => {
    return {
        items: state.usersPage.items
    };
};
export const UsersMapDispatchToProps = (dispatch: Dispatch): UsersMapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(FollowAC(userID));
        },
        setUsers: (items: Array<UserDataType>) => {
            dispatch(SetUsersAC(items));
        }
    };
};

