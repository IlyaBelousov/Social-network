let rerenderEntireTree = () => {
    console.log('Error');
};


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
export type StateRootType = {
    state: stateType
}

let stateRoot: StateRootType = {
    state: {
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
    }
};

export const addNewPost = (postMessage: string) => {
    let newPost = {id: 6, message: postMessage, username: 'Htoto'};
    stateRoot.state.profile.posts.post.unshift(newPost);
    rerenderEntireTree();
};
export const ChangeNewPostText = (newText: string) => {
    stateRoot.state.profile.posts.newPostText = newText;
    rerenderEntireTree();
};
export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
};


export default stateRoot;