import React from 'react';
import User from './User';
import s from './User.module.css';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {
    FollowAC,
    SetCurrentPageAC,
    SetIsFetchingAC,
    SetTotalUsersCountAC,
    SetUsersAC,
    UserDataType
} from '../../redux/users-reducer';
import axios from 'axios';
import {Preloader} from '../../common/Preloader';


type UsersPropsType = UsersMapStateToPropsType & UsersMapDispatchToPropsType

type UsersMapStateToPropsType = {
    items: Array<UserDataType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}
type UsersMapDispatchToPropsType = {
    follow: (userID: number) => void
    setUsers: (items: Array<UserDataType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    SetToggleIsFetching: (isFetching: boolean) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.SetToggleIsFetching(true);
        axios.get<{ items: UserDataType[], totalCount: number }>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.SetToggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(200);
            });
    }

    onPageChanged(pageNumber: number) {
        this.props.SetToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get<{ items: UserDataType[] }>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.SetToggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span
                            onClick={() => {
                                this.onPageChanged(p);
                            }}
                            className={(this.props.currentPage === p
                                ? s.selected
                                : s.pages)}>{p}</span>;
                    })}
                </div>
                {this.props.isFetching && <Preloader/>}
                {
                    this.props.items.map(u => {
                        const FollowHandler = () => {
                            this.props.follow(u.id);
                        };
                        return (
                            <div key={u.id} className={s.wrapper}>
                                <div className={s.container}>
                                    <div className={s.usersBlock}>
                                        <User key={u.id}
                                              name={u.name}
                                              photoUrl={u.photos.large}
                                              status={u.status}
                                        />

                                        <div>
                                            <button
                                                onClick={FollowHandler}
                                                className={s.userButton}>
                                                {u.followed ? 'UNFOLLOW' : 'FOLLOW'}
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>);
                    })}
            </div>);
    }
}


export const UsersMapStateToProps = (state: AppStateType): UsersMapStateToPropsType => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};
export const UsersMapDispatchToProps = (dispatch: Dispatch): UsersMapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(FollowAC(userID));
        },
        setUsers: (items: Array<UserDataType>) => {
            dispatch(SetUsersAC(items));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(SetCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(SetTotalUsersCountAC(totalCount));
        },
        SetToggleIsFetching: (isFetching: boolean) => {
            dispatch(SetIsFetchingAC(isFetching));
        }
    };
};