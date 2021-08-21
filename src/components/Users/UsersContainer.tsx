import {connect} from 'react-redux';
import {Users,UsersMapStateToProps} from './Users'
import {
    Follow,
    SetCurrentPage,
    SetToggleIsFetching,
    SetTotalUsersCount,
    SetUsers,
    UnFollow
} from '../../redux/users-reducer';


export const UsersContainer=connect(UsersMapStateToProps, {Follow,UnFollow,SetUsers,SetCurrentPage,SetTotalUsersCount,SetToggleIsFetching})(Users)