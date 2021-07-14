import React from 'react';
import s from './Profile.module.css';
import Post from './Posts/Post';
import {
    AddNewPostActionCreator,
    ChangeNewPostTextActionCreator,
    messageType,
    PostsType,
    ProfileActionType
} from '../../redux/state';
import ProfileInfo from './ProfileInfo';
import AddPost from './Posts/AddPost';
import MyPost from './Posts/MyPost';
import {store} from '../../redux/redux-store';
import { StoreContext } from '../../StoreContext';

/*type ProfileType = {
    posts: PostsType
    dispatch: (action: ProfileActionType) => void
}*/

function Profile() {
    return <StoreContext.Consumer>{
        (store)=>
            (
                <div className={s.profileCont}>
                    <img className={s.mainImage}
                         src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"/>

                    <ProfileInfo/>
                    <MyPost/>
                    <AddPostWrapper />
                    <div className={s.usersPosts}>
                        {
                            store.getState().profilePage.posts.post.map((p: messageType) =>
                                <Post username={p.username}
                                      id={p.id}
                                      message={p.message}/>)
                        }
                    </div>
                </div>
            )
    }</StoreContext.Consumer>

}


export default Profile;
{/*type AddPostWrapperPropsType = {
    dispatch: (action: ProfileActionType) => void
    newPostText: string
}*/}
const AddPostWrapper=()=>{
    const AddPostChangeHandler = (text: string) => {
        store.dispatch(ChangeNewPostTextActionCreator(text));
    };
    const CreatePostHandler = () => {
        store.dispatch(AddNewPostActionCreator());
    };
    return <AddPost
            createPost={CreatePostHandler}
            updateNewPostText={AddPostChangeHandler}
            newPostText={store.getState().profilePage.posts.newPostText}/>
        }
