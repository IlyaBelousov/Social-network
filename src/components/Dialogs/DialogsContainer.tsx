import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css';
import {
    AppStateType
} from '../../redux/redux-store';
import {NavLink} from 'react-router-dom';
import User from '../Users/User';
import Message from './Message';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {
    ChangeMessageTextActionType,
    DialogsReducerInitialStateType,
    SendMessageActionCreator
} from '../../redux/dialogs-reducer';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';

type DialogsType =
    { sendMessage: () => void, updateNewMessageBody: (text: string) => void }
    & DialogsMapStateToPropsType
type DialogsMapStateToPropsType = {
    dialogsPage: DialogsReducerInitialStateType
    isAuth: boolean
}


const MapStateToProps = (state: AppStateType): DialogsMapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(ChangeMessageTextActionType(text));
        },
        sendMessage: () => {
            dispatch(SendMessageActionCreator());
        },
    };
};


type DialogItemType = {
    id: number
    username: string
}
export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.user}><User id={props.id}
                                                                                                     photoUrl={'https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png'}
                                                                                                     name={props.username}
            /></NavLink>
        </div>
    );
};


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
        props.sendMessage();
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

export const DialogsContainer = compose<React.ComponentType>(
    connect(MapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs);



