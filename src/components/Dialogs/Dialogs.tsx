import React from 'react';
import s from './Dialogs.module.css';
export type DialogItemType={
    id:number
    username: string
    message:string
}
export type DialogType = {
    DialogsData:Array<DialogItemType>
}

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
            <div className={s.user}>{props.username}</div>
            <div className={s.message}>{props.message}</div>


        </div>
    );
}

