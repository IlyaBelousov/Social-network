import {combineReducers, createStore} from 'redux';
import {ProfileReducer} from './profile-reducer';
import {DialogsReducer} from './dialogs-reducer';

let rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer
})
export type AppStateType= ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);

export type ActionsType = ProfileActionType | DialogsActionType
export type ProfileActionType =
    ReturnType<typeof AddNewPostActionCreator>
    | ReturnType<typeof ChangeNewPostTextActionCreator>
export type DialogsActionType =
    ReturnType<typeof SendMessageActionCreator>
    | ReturnType<typeof ChangeMessageTextActionType>

export const SendMessageActionCreator = () => {
    return {type: 'SEND-MESSAGE'} as const;
};
export const ChangeMessageTextActionType = (text: string) => {
    return {
        type: 'CHANGE-MESSAGE-TEXT',
        newMessage: text
    } as const;
};
export const AddNewPostActionCreator = () => {
    return {type: 'ADD-POST'} as const;
};
export const ChangeNewPostTextActionCreator = (text: string) => {
    return {type: 'CHANGE-NEW-POST-TEXT', newText: text} as const;

};