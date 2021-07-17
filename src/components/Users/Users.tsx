import React from 'react';
import User from './User';
import s from './User.module.css';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {FollowAC, SetUsersAC, UserStateType} from '../../redux/users-reduser';

type UsersPropsType = {
    users: Array<UserStateType>
    follow: (userID: number) => void
    setUsers: (users: Array<UserStateType>) => void

}

export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {
                props.users.map(u => {
                    const FollowHandler = () => {
                        props.follow(u.id)
                    };
                    return (
                        <div className={s.wrapper}>
                            <div className={s.container}>
                                <div className={s.usersBlock}>
                                    <User key={u.id} name={u.fullName}/>
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
                                    <div className={s.country}>{u.location.country}</div>
                                    <div className={s.city}>{u.location.city}</div>
                                </div>
                            </div>
                        </div>);
                })
            }
        </div>
    );
};

export const UsersMapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    };
};
export const UsersMapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(FollowAC(userID));
        },
        setUsers: (users: Array<UserStateType>) => {
            dispatch(SetUsersAC(users));
        }
    };
};

