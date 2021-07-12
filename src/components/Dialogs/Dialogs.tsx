import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import {
    ChangeMessageTextActionType,
    DialogItemType, DialogsActionType,
    DialogType, SendMessageActionCreator,
    stateType
} from '../../redux/state';
import {NavLink} from 'react-router-dom';
import User from '../Users/User';
import Message from './Message';
import {AppStateType} from '../../redux/redux-store';

type DialogsType = {
    dispatch:(action:DialogsActionType)=>void
    state: AppStateType
}

const Dialogs = (props: DialogsType) => {
    let messageValue = props.state.dialogsPage.newMessageText;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        if (text) {
            props.dispatch(ChangeMessageTextActionType(text));
        }
    };
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            sendMessageHandler()
        }
    };
    const sendMessageHandler = () => {
        props.dispatch(SendMessageActionCreator());

    };
    let dialogsItems =
        props.state.dialogsPage.dialogs
            .map((t: DialogItemType) =>
                <DialogItem id={t.id}
                            username={t.username}/>);
    let messagesItems =
        props.state.dialogsPage.messages
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
                <textarea onKeyPress={onKeyPressHandler} value={messageValue} onChange={onChangeHandler}/>
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

