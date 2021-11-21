import React from 'react';
import User from './User';
import s from './User.module.css';
import {AppStateType} from '../../redux/redux-store';
import {Preloader} from '../../common/Preloader';
import {NavLink} from 'react-router-dom';
import {usersSelector} from "../../redux/users-selector";


type UsersPropsType = UsersMapStateToPropsType & UsersMapDispatchToPropsType


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


export const UsersMapStateToProps = (state: AppStateType) => {
    return {
        items: usersSelector.getUsers(state),
        pageSize: usersSelector.getPageSize(state),
        totalCount: usersSelector.getTotalCount(state),
        currentPage: usersSelector.getCurrentPage(state),
        isFetching: usersSelector.getIsFetching(state),
        followInProgress: usersSelector.getFollowInProgress(state),
    };
};
type UsersMapStateToPropsType = ReturnType<typeof UsersMapStateToProps>
