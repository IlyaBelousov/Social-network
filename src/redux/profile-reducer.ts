import {ActionsType} from './redux-store';

type PostType = { id: number, username: string, message: string }
export type PostsType = Array<PostType>

type InitialStatePostType = {
        post: PostsType
        newPostText: string
}
let initialState: InitialStatePostType = {
        post: [
            {id: 1, username: 'Liza', message: 'Hey! How are you?'},
            {id: 2, username: 'Denchik', message: 'Hey! How are you?'},
            {id: 3, username: 'Leo', message: 'Hey! How are you?'}
        ],
        newPostText: ''
};
export const ProfileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST' : {
            let stateCopy = {...state,post:[...state.post]}
            let newPostMessage = stateCopy.newPostText;
            let newPost = {id: 6, message: newPostMessage, username: 'Htoto'};
            stateCopy.post.unshift(newPost);
            stateCopy.newPostText = '';
            return {...stateCopy}

        }

        case 'CHANGE-NEW-POST-TEXT': {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return {...stateCopy};
        }

        default:
            return state;
    }
};
export const AddNewPostActionCreator = () => {
    return {type: 'ADD-POST'} as const;
};
export const ChangeNewPostTextActionCreator = (text: string) => {
    return {type: 'CHANGE-NEW-POST-TEXT', newText: text} as const;
};