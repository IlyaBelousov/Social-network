import React from 'react';
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
    DialogsReducerInitialStateType, MessageType,
    SendMessageActionCreator
} from '../../redux/dialogs-reducer';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {AddMessageDataType, AddMessageReduxForm} from "./AddMessageForm";

type DialogsType = {
        sendMessage: (message: string) => void,
        updateNewMessageBody: (text: string) => void
    }
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
        sendMessage: (message: string) => {
            dispatch(SendMessageActionCreator(message));
        },
    };
};


type DialogItemType = {
    id: number
    username: string
    messages?: MessageType[]
}
export const DialogItem = (props: DialogItemType) => {
    return <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.user}>
            <User
                key={props.id}
                id={props.id}
                photoUrl={'https://insights.mgm-tp.com/wp-content/uploads/2019/04/default-avatar.png'}
                name={props.username}
            /></NavLink>
        <div className={s.messages}>
            {
                props.messages?.map(m => <Message message={m.message}/>)
            }
        </div>
    </div>

};


export const Dialogs = (props: DialogsType) => {
    const onSubmit = (messageData: AddMessageDataType) => {
        props.sendMessage(messageData.newMessageBody);
    }
    return <div className={s.dialogsContainer}>
        {props.dialogsPage.dialogs
            .map((t: DialogItemType) => <DialogItem key={t.id} id={t.id}
                                                    username={t.username}
                                                    messages={t.messages}
            />)
        }
        <div className={s.addMessage}>
            <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
};

export const DialogsContainer = compose<React.ComponentType>(
    connect(MapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs);



