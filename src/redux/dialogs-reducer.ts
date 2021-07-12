import {ActionsType} from './state';

let initialState = {
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
        case 'SEND-MESSAGE':
            let body = state.newMessageText;
            let newMessage = {id: 6, message: body};
            state.newMessageText = '';
            state.messages.push(newMessage);
            return state;
        case 'CHANGE-MESSAGE-TEXT':
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
};