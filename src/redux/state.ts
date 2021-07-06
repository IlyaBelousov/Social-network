export type DialogItemType = {
    id: number
    username: string

}
export type DialogMessageType = {
    id: number
    message: string
}
export type DialogType = {
    dialogs: Array<DialogItemType>
    messages: Array<DialogMessageType>
    newMessageText: string
}
export type ProfilePropsType = {
    posts: PostsType

}
export type PostsType = {
    post: Array<messageType>
    newPostText: string
}
export type messageType = {
    id: number
    username: string
    message: string


}
export type stateType = {
    profilePage: ProfilePropsType
    dialogsPage: DialogType


}
export type StoreType = {
    _state: stateType
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    _rerenderEntireTree: (state: stateType) => void
    dispatch: (action: ProfileActionType | DialogsActionType) => void
}
export type ProfileActionType=AddNewPostActionType|ChangeNewPostActionType
export type DialogsActionType=SendMessageActionType|ChangeMessageTextActionType
export type AddNewPostActionType = {
    type: 'ADD-POST'

}
export type ChangeNewPostActionType = {
    type: 'CHANGE-NEW-POST-TEXT'
    newText: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'

}
export type ChangeMessageTextActionType = {
    type: 'CHANGE-MESSAGE-TEXT'
    newMessage: string
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: {
                post: [
                    {id: 1, username: 'Liza', message: 'Hey! How are you?'},
                    {id: 2, username: 'Denchik', message: 'Hey! How are you?'},
                    {id: 3, username: 'Leo', message: 'Hey! How are you?'}
                ],
                newPostText: ''
            },
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
    _rerenderEntireTree() {
        console.log('Error');
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPostMessage = this._state.profilePage.posts.newPostText;
            let newPost = {id: 6, message: newPostMessage, username: 'Htoto'};
            this._state.profilePage.posts.post.unshift(newPost);
            this._state.profilePage.posts.newPostText = '';
            this._rerenderEntireTree(this.getState());
        } else if (action.type === 'CHANGE-NEW-POST-TEXT') {
            this._state.profilePage.posts.newPostText = action.newText;
            this._rerenderEntireTree(this.getState());
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageText;
            let newMessage = {id: 6, message: body};
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push(newMessage);
            this._rerenderEntireTree(this.getState());
        } else if (action.type === 'CHANGE-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._rerenderEntireTree(this.getState());
        }
    }

};








