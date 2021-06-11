import React from 'react';
import s from './Dialogs.module.css';
import {DialogItemType, DialogType} from '../../state';
import {NavLink} from 'react-router-dom';
import User from '../Users/User';
import Message from './Message';

const Dialogs = (props: DialogType) => {

    return (
        <div className={s.dialogsContainer}>
            {
                props.DialogsData.map((t: DialogItemType) => <DialogItem id={t.id} message={t.message}
                                                                         username={t.username}/>)
            }
            <div className={s.addMessage}>
                <textarea></textarea>
                <button>Send</button>
            </div>


        </div>
    );
};

export default Dialogs;


export function DialogItem(props: DialogItemType) {
    return (
        <div className={s.dialog}>
            <div className={s.dialogItem}>
                <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.user}><User
                    name={props.username}/></NavLink>
            </div>
            <Message message={props.message}/>


        </div>
    );
}

