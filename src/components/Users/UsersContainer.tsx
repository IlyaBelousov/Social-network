import {connect} from 'react-redux';
import {Users, UsersMapStateToProps} from './Users';
import {
    SetCurrentPage, getUsersThunk, FollowThunk, UnFollowThunk
} from '../../redux/users-reducer';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';
import React from 'react';


export const UsersContainer = compose<React.ComponentType>(
    connect(UsersMapStateToProps, {
        FollowThunk,
        UnFollowThunk,
        SetCurrentPage,
        getUsersThunk,
    }),
    WithAuthRedirect
)(Users);