import React from 'react';
import s from './Profile.module.css';

type ProfileInfoPropsType = {
    photo: string|undefined
    contacts: {
        github: string
        facebook: string
        website: string,
        vk: string
        twitter: string
        instagram: string,
    }
    fullName:string
    lookingForAJobDescription:string
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div className={s.profileInformation}>
            <img src={props.photo}
                 className={s.profileImage}/>

            <div className={s.person}>
                <div className={s.personDescription}> {props.fullName}</div>
                <div className={s.personDescription}>{props.lookingForAJobDescription}</div>
                <div className={s.personDescription}>{props.contacts.vk}</div>
            </div>
        </div>

    );
};

export default ProfileInfo;