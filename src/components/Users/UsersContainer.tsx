import {connect} from 'react-redux';
import {Users, UsersMapStateToProps} from './Users';
import {
    Follow,
    UnFollow,
    SetCurrentPage,
    SetFollowInProgress, getUsersThunk
} from '../../redux/users-reducer';


export const UsersContainer = connect(UsersMapStateToProps, {
    Follow,
    UnFollow,
    SetCurrentPage,
    getUsersThunk,
    FollowInProgress: SetFollowInProgress
})(Users);