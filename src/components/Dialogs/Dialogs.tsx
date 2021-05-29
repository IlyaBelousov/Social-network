import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = () => {
    let DialogsData = [
        {id: 1, username: 'Liza', message: 'Hey'},
        {id: 2, username: 'Denchik', message: 'Hey'},
        {id: 3, username: 'Leo', message: 'Hey'},
        {id: 4, username: 'Brodiyagi', message: 'Hey'}
    ];
    return (
        <div className={s.dialogsContainer}>
            {
                DialogsData.map( t =>  <DialogItem id={t.id} message={t.message} username={t.username}/>)
            }



        </div>
    );
};

export default Dialogs;

export type DialogItemType = {
    id: number,
    username: string,
    message: string
}

export function DialogItem(props: DialogItemType) {
    return (
        <div className={s.dialog}>
            <div className={s.user}>{props.username}</div>
            <div className={s.message}>{props.message}</div>

        </div>
    );
}