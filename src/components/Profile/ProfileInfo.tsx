import React from 'react';
import s from './Profile.module.css';

type ProfileInfoPropsType = {
    photo: string|undefined
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div className={s.profileInformation}>
            <img src={props.photo}
                 className={s.profileImage}/>

            <div className={s.person}>
                <div className={s.personDescription}> Ilya</div>
                <div className={s.personDescription}> 26 y.o.</div>
                <div className={s.personDescription}>Saint-Petersburg</div>
            </div>
        </div>

    );
};

export default ProfileInfo;