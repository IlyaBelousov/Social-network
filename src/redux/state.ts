export type DialogItemType = {
    id: number
    username: string
    message: string
}
export type DialogType = {
    DialogsData: Array<DialogItemType>
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
    profile: ProfilePropsType
    dialog: DialogType


}
export type StoreType = {
    _state: stateType
    addNewPost: (postMessage: string) => void
    ChangeNewPostText: (newText: string) => void
    subscribe: (observer: (state: stateType) => void) => void
    getState:()=>stateType
    rerenderEntireTree: (state:stateType) => void

}

export let store: StoreType = {
    _state: {
        profile: {
            posts: {
                post: [
                    {id: 1, username: 'Liza', message: 'Hey! How are you?'},
                    {id: 2, username: 'Denchik', message: 'Hey! How are you?'},
                    {id: 3, username: 'Leo', message: 'Hey! How are you?'}
                ],
                newPostText: ''
            },
        },

        dialog: {
            DialogsData: [
                {id: 1, username: 'Liza', message: 'Hey'},
                {id: 2, username: 'Denchik', message: 'Hey'},
                {id: 3, username: 'Leo', message: 'Hey'},
                {id: 4, username: 'Brodiyagi', message: 'Hey'}
            ]
        }
    },
    getState(){
        return this._state
    },
    rerenderEntireTree() {
        console.log('Error');
    },
    addNewPost(postMessage: string) {
        let newPost = {id: 6, message: postMessage, username: 'Htoto'};
        this._state.profile.posts.post.unshift(newPost);
        this.rerenderEntireTree(this.getState());


    },
    ChangeNewPostText(newText: string) {
        this._state.profile.posts.newPostText = newText;
        this.rerenderEntireTree(this.getState());

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
};





