import {ActionsType} from './redux-store';
export type DialogsReducerInitialStateType={
    dialogs: Array<UserType>
    messages: Array<MessageType>
    newMessageText: string
}
type UserType={id: number, username: string}
type MessageType={id: number, message: string}

let initialState:DialogsReducerInitialStateType = {
    dialogs: [
        {id: 1, username: 'Liza'},
        {id: 2, username: 'Denchik'},
        {id: 3, username: 'Leo'},
        {id: 4, username: 'Brodiyagi'}
    ],
    messages: [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'Hey'},
        {id: 3, message: 'Hey'},
        {id: 4, message: 'Hey'}
    ],
    newMessageText: ''
};
export const DialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let stateCopy={...state,dialogs:[...state.dialogs],messages:[...state.messages]}
            let body = stateCopy.newMessageText;
            let newMessage = {id: 6, message: body};
            stateCopy.newMessageText = '';
            stateCopy.messages.push(newMessage);
            return {...stateCopy};
        }
        case 'CHANGE-MESSAGE-TEXT': {
            let stateCopy={...state}
            stateCopy.newMessageText = action.newMessage;
            return {...stateCopy};
        }
        default:
            return state;
    }
};
export const SendMessageActionCreator = () => {
    return {type: 'SEND-MESSAGE'} as const;
};
export const ChangeMessageTextActionType = (text: string) => {
    return {
        type: 'CHANGE-MESSAGE-TEXT',
        newMessage: text
    } as const;
};