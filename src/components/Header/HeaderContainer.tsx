import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {logOut} from "../../redux/auth-reducer";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | undefined
}
type MapDispatchToPropsType = {
    logOut: () => void
}
type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderPropsType> {
    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}/>
    }
}

const MapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.data.login,
        isAuth: state.auth.isAuth
    };
};


export const HeaderWithConnect = connect(MapStateToProps, {logOut})(HeaderContainer);