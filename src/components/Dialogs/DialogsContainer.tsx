import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import {
    AppStateType
} from '../../redux/redux-store';
import {NavLink} from 'react-router-dom';
import User from '../Users/User';
import Message from './Message';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {
    ChangeMessageTextActionType,
    DialogsReducerInitialStateType,
    SendMessageActionCreator
} from '../../redux/dialogs-reducer';

const DialogsContainer = () => {
    return <SuperDialogsContainer/>
};

export default DialogsContainer;

type DialogItemType = {
    id: number
    username: string
}
export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.user}><User photoUrl={"https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png"}
                name={props.username}/></NavLink>
        </div>
    );
};

type DialogsType = {
    dialogsPage: DialogsReducerInitialStateType
    sendMessage: () => void
    updateNewMessageBody: (text: string) => void
}

export const Dialogs = (props: DialogsType) => {
    let messageValue = props.dialogsPage.newMessageText;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        if (text) {
            props.updateNewMessageBody(text);
        }
    };
    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            sendMessageHandler();
        }
    };
    const sendMessageHandler = () => {
        props.sendMessage()
    };

    let disable = null;
    if (!messageValue) {
        disable = 'disable';
    } else {
        disable = null;
    }
    return <div className={s.dialogsContainer}>
        <div className={s.dialogItem}>
            <div className={s.dialogUsers}>
                {props.dialogsPage.dialogs
                    .map((t: DialogItemType) =>
                        <DialogItem id={t.id}
                                    username={t.username}/>)
                }
            </div>
            <div className={s.dialogMessage}>
                {props.dialogsPage.messages
                    .map(m =>
                        <Message message={m.message}/>
                    )
                }
            </div>
        </div>
        <div className={s.addMessage}>
            <textarea onKeyPress={onKeyPressHandler} value={messageValue} onChange={onChangeHandler}/>
            <button disabled={!!disable} onClick={sendMessageHandler}>Send</button>
        </div>
    </div>;
};

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    };
};
const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(ChangeMessageTextActionType(text));
        },
        sendMessage: () => {
            dispatch(SendMessageActionCreator());
        },
    };
};


const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

