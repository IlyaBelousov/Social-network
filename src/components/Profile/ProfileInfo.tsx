import React from 'react';
import s from './Profile.module.css';
import {ProfileStatus} from './ProfileStatus';

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
    status:string
    updateStatus: (status: string) => void
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
                <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
            </div>
        </div>

    );
};

export default ProfileInfo;