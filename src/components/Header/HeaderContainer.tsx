import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setAuthorization} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


type MapStateToPropsType = {
    isAuth: boolean
    login: string | undefined
}
type MapDispatchToPropsType = {
    setAuthorization: () => void
}
type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.setAuthorization()
    }

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


export const HeaderWithConnect = connect(MapStateToProps, {setAuthorization})(HeaderContainer);