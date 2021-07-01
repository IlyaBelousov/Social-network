import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItemType, DialogType, stateType} from '../../redux/state';
import {NavLink} from 'react-router-dom';
import User from '../Users/User';
import Message from './Message';

type DialogsType = {
    DialogsData: DialogType
    SendMessage: (message: string) => void
    ChangeMessage: (newMessage: string) => void
    state: stateType
}

const Dialogs = (props: DialogsType) => {
    let messageValue = props.state.dialogsPage.newMessageText;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        if (text) {
            props.ChangeMessage(text);
            console.log(props.state.dialogsPage.newMessageText);
        }
    };

    const sendMessageHandler = () => {
        props.SendMessage(messageValue);

    };
    let dialogsItems =
        props.DialogsData.dialogs
            .map((t: DialogItemType) =>
                <DialogItem id={t.id}
                            username={t.username}/>);
    let messagesItems =
        props.DialogsData.messages
            .map(m =>
                <Message message={m.message}/>
            );
    let disable=null
    if(!messageValue){
        disable='disable'
    }
    else{
        disable=null
    }


    return (
        <div className={s.dialogsContainer}>
            <div className={s.dialogItem}>
                <div className={s.dialogUsers}>
                    {dialogsItems}
                </div>
                <div className={s.dialogMessage}>
                    {messagesItems}
                </div>
            </div>
            <div className={s.addMessage}>
                <textarea value={messageValue} onChange={onChangeHandler}/>
                <button disabled={!!disable} onClick={sendMessageHandler}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;


export function DialogItem(props: DialogItemType) {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.user}><User
                name={props.username}/></NavLink>
        </div>
    );
}

