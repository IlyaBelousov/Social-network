import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {SetAuthDataThunk} from '../../redux/auth-reducer';

type MapStateToPropsType = {
    data: {
        userId: number | null
        email: string | null
        login: string | null
    },
    isAuth: boolean
}
type MapDispatchToPropsType = {
    SetAuthDataThunk: () => void
}
type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.SetAuthDataThunk()
    }

    render() {
        return <Header
            login={this.props.data.login}
            isAuth={this.props.isAuth}/>;
    }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        data: state.auth,
        isAuth: state.auth.isAuth
    };
};

export const HeaderWithConnect = connect(MapStateToProps, {SetAuthDataThunk})(HeaderContainer);