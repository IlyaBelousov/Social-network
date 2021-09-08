import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

type PostType = { id: number, username: string, message: string }
export type PostsType = Array<PostType>
export type UserProfileType = {
    aboutMe: string
    contacts: {
        github: string
        facebook: string
        website: string,
        vk: string
        twitter: string
        instagram: string,
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string
        large: string
    }
    userId?: number | null
}

type ProfileInitialStateType = {
    post: PostsType
    newPostText: string
    userProfile: UserProfileType
}
let initialState: ProfileInitialStateType = {
    post: [
        {id: 1, username: 'Liza', message: 'Hey! How are you?'},
        {id: 2, username: 'Denchik', message: 'Hey! How are you?'},
        {id: 3, username: 'Leo', message: 'Hey! How are you?'}
    ],
    userProfile: {
        aboutMe: '',
        contacts: {
            github: '',
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
        },
        fullName: '',
        lookingForAJob: true,
        lookingForAJobDescription: '',
        photos: {
            small: '',
            large: '',
        },
        userId: null,
    },
    newPostText: ''
};
export const ProfileReducer = (state = initialState, action: ActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST : {
            let stateCopy = {...state, post: [...state.post]};
            let newPostMessage = stateCopy.newPostText;
            let newPost = {id: 6, message: newPostMessage, username: 'Htoto'};
            stateCopy.post.unshift(newPost);
            stateCopy.newPostText = '';
            return {...stateCopy};

        }

        case CHANGE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return {...stateCopy};
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: {...action.profileData}
            };
        }

        default:
            return state;
    }
};


export const AddNewPostActionCreator = () => {
    return {type: ADD_POST} as const;
};
export const ChangeNewPostTextActionCreator = (text: string) => {
    return {type: CHANGE_NEW_POST_TEXT, text} as const;
};
export const SetUserProfileActionCreator = (profileData: UserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profileData
    } as const;
};

export const SetUserProfileThunk = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.GetUserProfile(userId)
        .then(response => {
            dispatch(SetUserProfileActionCreator(response.data));
        });
};
