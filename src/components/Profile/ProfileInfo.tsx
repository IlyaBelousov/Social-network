import React from 'react';
import s from './Profile.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInformation}>
            <img src="https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png"
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