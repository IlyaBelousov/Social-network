import {ActionsType} from './redux-store';

let initialState = {
    posts: {
        post: [
            {id: 1, username: 'Liza', message: 'Hey! How are you?'},
            {id: 2, username: 'Denchik', message: 'Hey! How are you?'},
            {id: 3, username: 'Leo', message: 'Hey! How are you?'}
        ],
        newPostText: ''
    }
};
export const ProfileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST' :
            let newPostMessage = state.posts.newPostText;
            let newPost = {id: 6, message: newPostMessage, username: 'Htoto'};
            state.posts.post.unshift(newPost);
            state.posts.newPostText = '';
            return state;

        case 'CHANGE-NEW-POST-TEXT':
            state.posts.newPostText = action.newText;
            return state;

        default:
            return state;
    }
};