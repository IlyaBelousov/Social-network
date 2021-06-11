import {rerenderEntireTree} from './rerender';

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
    addNewPost:(postMessage: string)=>void
}
export type PostsType = {
    post: Array<messageType>
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
                ]
            },
            addNewPost:(postMessage: string)=>{
                let newPost = {id: 6, message: postMessage, username: 'Htoto'};
                stateRoot.state.profile.posts.post.unshift(newPost);
                rerenderEntireTree();
            }

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




export default stateRoot;