import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import MyPost from './Posts/MyPost';
import {PostWrapper} from './Posts/PostsWrapper';
import {SetUserProfileThunk, UserProfileType} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId: string | undefined
}
export type MapDispatchToPropsType = {
    SetUserProfileThunk: (userId: number) => void
}
type ProfileMapStateToPropsType = {
    isAuth:boolean
    userProfile: UserProfileType
    contacts: {
        github: string
        facebook: string
        website: string,
        vk: string
        twitter: string
        instagram: string,
    }
    fullName: string
    lookingForAJobDescription: string
}


type PropsType = ProfileMapStateToPropsType & MapDispatchToPropsType
type ProfilePropsType = RouteComponentProps<PathParamsType> & PropsType

export class Profile extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.SetUserProfileThunk(+userId);
    }

    render() {
            if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>;
            }
        return <div className={s.profileCont}>
            <img className={s.mainImage}
                 src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"/>
            <ProfileInfo
                fullName={this.props.fullName}
                lookingForAJobDescription={this.props.lookingForAJobDescription}
                contacts={this.props.contacts}
                photo={this.props.userProfile.photos.small ? this.props.userProfile.photos.small : 'https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png'}/>
            <MyPost/>
            <PostWrapper/>
        </div>;
    }
}

const MapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        userProfile: state.profilePage.userProfile,
        contacts: state.profilePage.userProfile.contacts,
        fullName: state.profilePage.userProfile.fullName,
        lookingForAJobDescription: state.profilePage.userProfile.lookingForAJobDescription
    };
};

const ComponentWithURLData = withRouter(Profile);
export const ProfileContainer = connect(MapStateToProps, {SetUserProfileThunk})(ComponentWithURLData);


