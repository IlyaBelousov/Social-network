import React from 'react';
import s from './Profile.module.css';
import Post from './Posts/Post';
import {messageType, PostsType, ProfilePropsType} from '../../redux/state';
import ProfileInfo from './ProfileInfo';
import AddPost from './Posts/AddPost';
import MyPost from './Posts/MyPost';

type ProfileType={
    addNewPost:(postMessage: string) =>void
    posts:PostsType
    ChangeNewPostText: (newText: string) =>void
}

function Profile(props:ProfileType) {
    return (
        <div className={s.profileCont}>
            <img className={s.mainImage}
                 src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"/>

            <ProfileInfo/>
            <MyPost />
            <AddPost ChangeNewPostText={props.ChangeNewPostText} newPostText={props.posts.newPostText} addNewPost={props.addNewPost}/>

            <div className={s.usersPosts}>
                {
                    props.posts.post.map((p: messageType) => <Post username={p.username} id={p.id}
                                                                   message={p.message}/>)
                }
            </div>
        </div>
    );
}

export default Profile;