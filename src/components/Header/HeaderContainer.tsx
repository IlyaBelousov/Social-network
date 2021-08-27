import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {SetAuthData} from '../../redux/auth-reducer';

type MapStateToPropsType = {
    data: {
        userId: number | null
        email: string | null
        login: string | null
    },
    isAuth: boolean
}
type MapDispatchToPropsType = {
    SetAuthData: (userId: number, email: string, login: string) => void
}
type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get<{ data: { id: number, email: string, login: string }, resultCode: number }>(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.SetAuthData(response.data.data.id, response.data.data.email, response.data.data.login);
                }
            });
    }

    render() {
        return <Header
            login={this.props.data.login}
            isAuth={this.props.isAuth}/>;
    }
}

const MapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        data: state.auth,
        isAuth: state.auth.isAuth
    };
};

export const HeaderWithConnect = connect(MapStateToProps, {SetAuthData})(HeaderContainer);