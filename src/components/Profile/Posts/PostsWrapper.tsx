import {AppStateType} from '../../../redux/redux-store';
import AddPost from './AddPost';
import s from '../Profile.module.css';
import Post from './Post';
import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {AddNewPostActionCreator, ChangeNewPostTextActionCreator} from '../../../redux/profile-reducer';

type PostMessageType = {
    id: number
    username: string
    message: string
}
export const PostWrapper = () => {
    return <div>
        <SuperPostWrapper/>
        <UsersPostContainer/>
    </div>;
};
type UsersPostPropsType = {
    post:Array<PostMessageType>
}

export const UsersPost = (props: UsersPostPropsType) => {
    return <div className={s.usersPosts}>
        {
            props.post.map((p: PostMessageType) =>
                <Post key={p.id} username={p.username}
                      id={p.id}
                      message={p.message}/>)
        }
    </div>;
};

const mapStateToProps = (state: AppStateType) => {
    return {
        newPostText: state.profilePage.newPostText,
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        createPost: () => {
            dispatch(AddNewPostActionCreator());
        },
        updateNewPostText: (text: string) => {
            dispatch(ChangeNewPostTextActionCreator(text));
        }
    };
};
const SuperPostWrapper = connect(mapStateToProps, mapDispatchToProps)(AddPost);
const UsersPostMapStateToProps = (state: AppStateType) => {
    return {
        post: state.profilePage.post
    };
};
const UsersPostContainer = connect(UsersPostMapStateToProps)(UsersPost);