import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import {
    ChangeMessageTextActionType,
    SendMessageActionCreator,
} from '../../redux/redux-store';
import {NavLink} from 'react-router-dom';
import User from '../Users/User';
import Message from './Message';
import {StoreContext} from '../../StoreContext';

const Dialogs = () => {
    return <DialogsContainer />
};

export default Dialogs;


type DialogItemType = {
    id: number
    username: string

}
export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.user}><User
                name={props.username}/></NavLink>
        </div>
    );
};

export const DialogsContainer = () => {
    return <StoreContext.Consumer>{
        (store) => {
            let messageValue = store.getState().dialogsPage.newMessageText;

            const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
                let text = e.currentTarget.value;
                if (text) {
                    store.dispatch(ChangeMessageTextActionType(text));
                }
            };
            const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
                if (event.key === 'Enter') {
                    sendMessageHandler();
                }
            };
            const sendMessageHandler = () => {
                store.dispatch(SendMessageActionCreator());

            };
            let dialogsItems =
                store.getState().dialogsPage.dialogs
                    .map((t: DialogItemType) =>
                        <DialogItem id={t.id}
                                    username={t.username}/>);
            let messagesItems =
                store.getState().dialogsPage.messages
                    .map(m =>
                        <Message message={m.message}/>
                    );
            let disable = null;
            if (!messageValue) {
                disable = 'disable';
            } else {
                disable = null;
            }
            return <div className={s.dialogsContainer}>
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
        }


    }</StoreContext.Consumer>;
};

