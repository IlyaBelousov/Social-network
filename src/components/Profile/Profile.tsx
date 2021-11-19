import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import MyPost from './Posts/MyPost';
import {PostWrapper} from './Posts/PostsWrapper';
import {
    AddNewPost,
    SetUserProfileThunk,
    SetUserStatusThunk,
    UpdateUserStatusThunk,
    UserProfileType
} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';


type PathParamsType = {
    userId: string | undefined
}
export type MapDispatchToPropsType = {
    SetUserProfileThunk: (userId: number) => void
    SetUserStatusThunk: (userId: number) => void
    UpdateUserStatusThunk: (status: string) => void
    AddNewPost: (newPost: string) => void
}
type ProfileMapStateToPropsType = {

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
    status: string
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
        this.props.SetUserStatusThunk(+userId);
    }

    render() {

        return <div className={s.profileCont}>
            <ProfileInfo
                updateStatus={this.props.UpdateUserStatusThunk}
                status={this.props.status}
                fullName={this.props.fullName}
                lookingForAJobDescription={this.props.lookingForAJobDescription}
                contacts={this.props.contacts}
                photo={this.props.userProfile.photos.small ? this.props.userProfile.photos.small : 'https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png'}/>
            <MyPost/>
            <PostWrapper AddNewPost={this.props.AddNewPost}/>
        </div>;
    }
}

const MapStateToProps = (state: AppStateType): ProfileMapStateToPropsType => {
    return {

        userProfile: state.profilePage.userProfile,
        contacts: state.profilePage.userProfile.contacts,
        fullName: state.profilePage.userProfile.fullName,
        lookingForAJobDescription: state.profilePage.userProfile.lookingForAJobDescription,
        status: state.profilePage.userProfile.status
    };
};


export const ProfileContainer = compose<React.ComponentType>(
    connect(MapStateToProps, {SetUserProfileThunk, SetUserStatusThunk, UpdateUserStatusThunk, AddNewPost}),
    withRouter,
)(Profile);



