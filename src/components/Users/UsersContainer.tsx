import {connect} from 'react-redux';
import {Users, UsersMapStateToProps} from './Users';
import {
    SetCurrentPage,getUsersThunk,FollowThunk, UnFollowThunk
} from '../../redux/users-reducer';


export const UsersContainer = connect(UsersMapStateToProps, {
    FollowThunk,
    UnFollowThunk,
    SetCurrentPage,
    getUsersThunk,
})(Users);