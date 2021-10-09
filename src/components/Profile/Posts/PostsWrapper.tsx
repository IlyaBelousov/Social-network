import {AppStateType} from '../../../redux/redux-store';
import {AddPostFormData, AddPostReduxForm} from './AddPost';
import s from '../Profile.module.css';
import Post from './Post';
import React from 'react';
import {connect} from 'react-redux';


type PostMessageType = {
    id: number
    username: string
    message: string
}
type PostWrapperPropsType = {
    AddNewPost: (newPost: string) => void
}
export const PostWrapper = (props:PostWrapperPropsType) => {
    return <div>
        <AddNewPostForm AddNewPost={props.AddNewPost}/>
        <UsersPostContainer/>
    </div>;
};
type UsersPostPropsType = {
    post: Array<PostMessageType>
}
const AddNewPostForm = (props:PostWrapperPropsType) => {
    const onSubmit = (post: AddPostFormData) => {
        props.AddNewPost(post.addPost)
    }
    return <AddPostReduxForm onSubmit={onSubmit}/>
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

const UsersPostMapStateToProps = (state: AppStateType) => {
    return {
        post: state.profilePage.post
    };
};
const UsersPostContainer = connect(UsersPostMapStateToProps)(UsersPost);