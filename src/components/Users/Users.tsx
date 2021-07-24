import React from 'react';
import User from './User';
import s from './User.module.css';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {FollowAC, SetUsersAC, UserDataType} from '../../redux/users-reducer';
import axios from 'axios';


type UsersPropsType = UsersMapStateToPropsType & UsersMapDispatchToPropsType

type UsersMapStateToPropsType = {
    items: Array<UserDataType>
}
type UsersMapDispatchToPropsType = {
    follow: (userID: number) => void
    setUsers: (items: Array<UserDataType>) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        if (this.props.items.length === 0) {
            axios.get<{ items: UserDataType[] }>('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.items.map(u => {
                        const FollowHandler = () => {
                            this.props.follow(u.id);
                        };
                        return (
                            <div key={u.id} className={s.wrapper}>
                                <div className={s.container}>
                                    <div className={s.usersBlock}>
                                        <User key={u.id} name={u.name}
                                              photoUrl={'https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png'}/>
                                        <p className={s.status}>{u.status}</p>
                                        <div>
                                            <button
                                                onClick={FollowHandler}
                                                className={s.userButton}>
                                                {u.followed ? 'UNFOLLOW' : 'FOLLOW'}
                                            </button>
                                        </div>
                                    </div>
                                    {/*<div className={s.location}>
                                        {/!*<div className={s.country}>{u.location.country}</div>
                                            <div className={s.city}>{u.location.city}</div>*!/}
                                            </div>*/}
                                </div>
                            </div>);
                    })}
            </div>);
    }
}


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