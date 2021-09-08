import React from 'react';
import s from './Profile.module.css';

type ProfileInfoPropsType = {
    photo: string | undefined
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
}


const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div className={s.profileInformation}>
            <img src={props.photo}
                 className={s.profileImage}/>

            <div className={s.person}>
                <h2 className={s.fullName}> {props.fullName}</h2>
                <h4 className={s.personDescription}>{props.lookingForAJobDescription}</h4>
                <h4 className={s.personDescription}>{props.contacts.vk}</h4>
            </div>
        </div>

    );
};

export default ProfileInfo;