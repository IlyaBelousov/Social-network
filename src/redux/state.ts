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
    addNewPost: (postMessage: string) => void
    ChangeNewPostText: (newText: string) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    rerenderEntireTree: (state: stateType) => void
    SendMessage: (message: string) => void
    ChangeMessage: (newMessage: string) => void

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
    rerenderEntireTree() {
        console.log('Error');
    },
    ChangeMessage(newMessage: string) {
        this._state.dialogsPage.newMessageText = newMessage;
        this.rerenderEntireTree(this.getState());

    },
    SendMessage(message: string) {
        let body = this._state.dialogsPage.newMessageText;
        let newMessage = {id: 1, message: body};
        this._state.dialogsPage.newMessageText = '';
        this._state.dialogsPage.messages.push(newMessage);
        this.rerenderEntireTree(this.getState());


    },
    addNewPost(postMessage: string) {
        let newPost = {id: 6, message: postMessage, username: 'Htoto'};
        this._state.profilePage.posts.post.unshift(newPost);
        this.rerenderEntireTree(this.getState());


    },
    ChangeNewPostText(newText: string) {
        this._state.profilePage.posts.newPostText = newText;
        this.rerenderEntireTree(this.getState());

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
};








