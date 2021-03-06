
import {ActionsType} from './redux-store';

type DialogsItemType = {
    id: number
    username: string

}
export type DialogMessageType = {
    id: number
    message: string
}
export type DialogType = {
    dialogs: Array<DialogsItemType>
    messages: Array<DialogMessageType>
    newMessageText: string
}

export type PostsType = {
    post: Array<messageType>
    newPostText: string
}
 type messageType = {
    id: number
    username: string
    message: string
}
export type stateType = {
    profilePage: PostsType
    dialogsPage: DialogType
}
export type StoreType = {
    _state: stateType
    subscriber: (observer: (state: stateType) => void) => void
    getState: () => stateType
    _callSubscriber: (state: stateType) => void
    dispatch: (action: ActionsType) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
                post: [
                    {id: 1, username: 'Liza', message: 'Hey! How are you?'},
                    {id: 2, username: 'Denchik', message: 'Hey! How are you?'},
                    {id: 3, username: 'Leo', message: 'Hey! How are you?'}
                ],
                newPostText: ''

        },
        dialogsPage: {
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
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('Error');
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        /*this._state.profilePage=ProfileReducer(this._state.profilePage, action);
       this._state.dialogsPage=DialogsReducer(this._state.dialogsPage, action);
       this._callSubscriber(this._state)*/
    }
};
