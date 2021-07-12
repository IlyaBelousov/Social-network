import {ActionsType, DialogType} from './state';

export const DialogsReducer = (state: DialogType, action: ActionsType) => {
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