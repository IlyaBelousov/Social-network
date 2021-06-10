import React from 'react';
import s from './Dialogs.module.css';
import {DialogItemType, DialogType} from '../../index';
import {NavLink} from 'react-router-dom';

const Dialogs = (props:DialogType) => {

    return (
        <div className={s.dialogsContainer}>
            {
                props.DialogsData.map( (t:DialogItemType) =>  <DialogItem id={t.id} message={t.message} username={t.username}/>)
            }



        </div>
    );
};

export default Dialogs;


export function DialogItem(props: DialogItemType) {
    return (
        <div className={s.dialog}>
            <div className={s.dialogItem}>
                <NavLink to={'/dialogs/'+ props.id} activeClassName={s.active}  className={s.user}>{props.username}</NavLink>
            </div>
            <div className={s.message}>{props.message}</div>




        </div>
    );
}

