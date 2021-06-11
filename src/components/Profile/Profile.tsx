import React from 'react';
import s from './Profile.module.css';
import Post from './Posts/Post';
import {messageType, ProfilePropsType} from '../../state';
import ProfileInfo from './ProfileInfo';
import AddPost from './Posts/AddPost';
import MyPost from './Posts/MyPost';


function Profile(props: ProfilePropsType) {
    return (
        <div className={s.profileCont}>
            <img className={s.mainImage}
                 src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"/>

            <ProfileInfo/>
            <MyPost/>
            <AddPost addNewPost={props.addNewPost}/>

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