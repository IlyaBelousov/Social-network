import {connect} from 'react-redux';
import {Users, UsersMapStateToProps} from './Users';
import {
    FollowAC,
    SetCurrentPageAC,
    SetIsFetchingAC,
    SetTotalUsersCountAC,
    SetUsersAC, UnFollowAC,
} from '../../redux/users-reducer';


export const UsersContainer = connect(UsersMapStateToProps, {
    Follow: FollowAC,
    UnFollow: UnFollowAC,
    setUsers: SetUsersAC,
    setCurrentPage: SetCurrentPageAC,
    setTotalUsersCount: SetTotalUsersCountAC,
    SetToggleIsFetching: SetIsFetchingAC,
})(Users);