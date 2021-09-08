import React from 'react';
import User from './User';
import s from './User.module.css';
import {AppStateType} from '../../redux/redux-store';
import {
    UserDataType
} from '../../redux/users-reducer';
import {Preloader} from '../../common/Preloader';
import {NavLink} from 'react-router-dom';



type UsersPropsType = UsersMapStateToPropsType & UsersMapDispatchToPropsType

type UsersMapStateToPropsType = {
    isAuth:boolean
    items: Array<UserDataType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: number[]
}
type UsersMapDispatchToPropsType = {
    FollowThunk: (id: number) => void
    UnFollowThunk: (id: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged(pageNumber: number) {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
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
                        return (
                            <div key={u.id} className={s.wrapper}>
                                <div className={s.container}>
                                    <div className={s.usersBlock}>
                                        <NavLink to={`/profile/${u.id}`}>
                                            <User key={u.id}
                                                  name={u.name}
                                                  photoUrl={u.photos.large}
                                                  status={u.status}
                                                  id={u.id}
                                            />
                                        </NavLink>

                                        <div>
                                            {u.followed ?
                                                <button disabled={this.props.followInProgress.some(id => id === u.id)}
                                                        onClick={() => this.props.UnFollowThunk(u.id)}
                                                        className={s.userButton}>UNFOLLOW</button>

                                                : <button disabled={this.props.followInProgress.some(id => id === u.id)}
                                                          onClick={() => this.props.FollowThunk(u.id)}
                                                          className={s.userButton}>FOLLOW</button>
                                            }
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
        isAuth:state.auth.isAuth,
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress,
    };
};
