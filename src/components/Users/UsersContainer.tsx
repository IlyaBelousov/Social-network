import React from 'react';
import {connect} from 'react-redux';
import {Users, UsersMapDispatchToProps, UsersMapStateToProps} from './Users';


export const UsersContainer=connect(UsersMapStateToProps,UsersMapDispatchToProps)(Users)