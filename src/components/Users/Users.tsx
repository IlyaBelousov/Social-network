import React from 'react';
import User from './User';
import s from './User.module.css';
import {AppStateType} from '../../redux/redux-store';
import {
    SetFollowInProgress,
    UserDataType
} from '../../redux/users-reducer';
import {Preloader} from '../../common/Preloader';
import {NavLink} from 'react-router-dom';
import {Follow, GetUsers, UnFollow} from '../../api/api';


type UsersPropsType = UsersMapStateToPropsType & UsersMapDispatchToPropsType

type UsersMapStateToPropsType = {
    items: Array<UserDataType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followInProgress: number[]
}
type UsersMapDispatchToPropsType = {
    Follow: (userID: number) => void
    UnFollow: (userID: number) => void
    SetUsers: (items: Array<UserDataType>) => void
    SetCurrentPage: (currentPage: number) => void
    SetTotalUsersCount: (totalCount: number) => void
    SetToggleIsFetching: (isFetching: boolean) => void
    FollowInProgress: (isFollow: boolean, id: number) => void
}

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.SetToggleIsFetching(true);
        GetUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.SetToggleIsFetching(false);
                this.props.SetUsers(response.items);
                this.props.SetTotalUsersCount(500);
            });
    }

    onPageChanged(pageNumber: number) {
        this.props.SetToggleIsFetching(true);
        this.props.SetCurrentPage(pageNumber);
        GetUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.SetToggleIsFetching(false);
                this.props.SetUsers(response.items);
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
                                                <button disabled={this.props.followInProgress.some(id=>id===u.id)} onClick={() => {
                                                    this.props.FollowInProgress(true, u.id);
                                                    UnFollow(u.id)
                                                        .then(response => {
                                                            if (response.data.resultCode === 0) {
                                                                this.props.UnFollow(u.id);
                                                            }
                                                            this.props.FollowInProgress(false, u.id);
                                                        });

                                                }
                                                }
                                                        className={s.userButton}>UNFOLLOW</button>

                                                : <button disabled={this.props.followInProgress.some(id=>id===u.id)}
                                                          onClick={() => {
                                                              this.props.FollowInProgress(true, u.id);
                                                              Follow(u.id)
                                                                  .then(response => {
                                                                      if (response.data.resultCode === 0) {
                                                                          this.props.Follow(u.id);
                                                                      }
                                                                      this.props.FollowInProgress(false, u.id);
                                                                  });

                                                          }
                                                          }
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
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress,
    };
};
