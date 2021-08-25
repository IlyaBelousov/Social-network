import {connect} from 'react-redux';
import {Users, UsersMapStateToProps} from './Users';
import {
    Follow,
    SetToggleIsFetching,
    UnFollow,
    SetUsers,
    SetCurrentPage,
    SetTotalUsersCount
} from '../../redux/users-reducer';



export const UsersContainer = connect(UsersMapStateToProps, {
    Follow,
    UnFollow,
    SetUsers,
    SetCurrentPage,
    SetTotalUsersCount,
    SetToggleIsFetching,
})(Users);