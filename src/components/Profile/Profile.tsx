import React from 'react';
import s from './Profile.module.css';
import Post from './Post';
import {messageType, ProfilePropsType} from '../../index';


function Profile(props:ProfilePropsType) {
    return (
        <div className={s.profileCont}>
            <img
                src="https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/ff068ff5fc855601751499d694c0111a/shutterstock_376532611.jpg?fit=fill&w=800&h=300"/>
            <div className={s.profileInformation}>
                <img src="https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png"
                     className={s.avatar}/>
            </div>
            <div className={s.person}>
                <div className={s.personDescription}> Ilya</div>
                <div className={s.personDescription}> 26 y.o.</div>
                <div className={s.personDescription}>Saint-Petersburg</div>
            </div>
            <div className={s.posts}>
                <div className="myPost">
                    <h3>Hey</h3>
                </div>
            </div>
            <div className={s.newPost}>
                <textarea placeholder="New Post"/>
                <button>Send</button>
            </div>
            <div className={s.usersPosts}>
                {
                    props.posts.post.map((p:messageType)=><Post id={p.id} message={p.message}/>)
                }
            </div>
        </div>
    );
}

export default Profile;