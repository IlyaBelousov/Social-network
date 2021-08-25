import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import MyPost from './Posts/MyPost';
import {PostWrapper} from './Posts/PostsWrapper';
import axios from 'axios';
import {SetUserProfileActionCreator, UserProfileType} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';

type ProfilePropsType = ProfileMapStateToPropsType & MapDispatchToPropsType

export class Profile extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.SetUserProfile(response.data);
                console.log(this.props.userProfile);
            });
    }

    render() {
        return <div className={s.profileCont}>
            <img className={s.mainImage}
                 src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"/>
            <ProfileInfo photo={this.props.userProfile.photos?.small}/>
            <MyPost/>
            <PostWrapper/>
        </div>;
    }
}

export default Profile;
type ProfileMapStateToPropsType = {
    userProfile: UserProfileType
}

const MapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile
    };
};
export type MapDispatchToPropsType = {
    SetUserProfile: (profileData: UserProfileType) => void
}
export const ProfileContainer = connect(MapStateToProps, {SetUserProfile: SetUserProfileActionCreator})(Profile);

