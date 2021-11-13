import {ActionsType} from './redux-store';

export type DialogsReducerInitialStateType = {
    dialogs: Array<UserType>
    newMessageText: string
}
export type UserType = { id: number, username: string, messages: MessageType[] }
export type MessageType = { id: number, message: string }

let initialState: DialogsReducerInitialStateType = {
    dialogs: [
        {
            id: 1,
            username: 'Liza',
            messages: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'Hey'},
                {id: 3, message: 'Hey'},
                {id: 4, message: 'Hey'}
            ]
        },
        {
            id: 2,
            username: 'Denchik',
            messages: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'Hey'},
                {id: 3, message: 'Hey'},
                {id: 4, message: 'Hey'}
            ],
        },
        {
            id: 3,
            username: 'Leo',
            messages: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'Hey'},
                {id: 3, message: 'Hey'},
                {id: 4, message: 'Hey'}
            ],
        },

    ],

    newMessageText: ''
};
export const DialogsReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let stateCopy = {...state, dialogs: [...state.dialogs]}
            let newMessage = {id: 3, message: action.message};
            stateCopy.dialogs.map(m => m.id === newMessage.id
                ? m.messages.push(newMessage)
                : m
            )
            return {...stateCopy};
        }
        default:
            return state;
    }
};
export const SendMessageActionCreator = (message: string) => {
    return {type: 'SEND-MESSAGE', message} as const;
};
