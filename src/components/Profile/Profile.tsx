import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo';
import MyPost from './Posts/MyPost';
import {PostWrapper} from './Posts/PostsWrapper';

export const Profile = (props: any) => {
    return <div className={s.profileCont}>
        <img className={s.mainImage}
             src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"/>
        <ProfileInfo/>
        <MyPost/>
        <PostWrapper/>
    </div>;
};


