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
            let newMessage = {id: 6, message: action.message};
            stateCopy.messages.push(newMessage);
            return {...stateCopy};
        }
        default:
            return state;
    }
};
export const SendMessageActionCreator = (message:string) => {
    return {type: 'SEND-MESSAGE',message} as const;
};
