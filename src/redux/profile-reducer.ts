import {ActionsType, ProfilePropsType} from './state';

export const ProfileReducer = (state: ProfilePropsType, action: ActionsType) => {
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