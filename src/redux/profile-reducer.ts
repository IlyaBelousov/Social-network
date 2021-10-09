import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

const ADD_POST = 'ADD_POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

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
    status: string
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
        status: ''
    },
    newPostText: ''
};
export const ProfileReducer = (state = initialState, action: ActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case ADD_POST : {
            let stateCopy = {...state, post: [...state.post]};
            let newPost = {id: 6, message: action.newPost, username: 'Htoto'};
            stateCopy.post.unshift(newPost);
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
        case SET_USER_STATUS: {
            return {
                ...state,
                userProfile: {...state.userProfile, status: action.status}
            };
        }
        case UPDATE_USER_STATUS: {
            return {
                ...state,
                userProfile: {...state.userProfile, status: action.status}
            };
        }
        default:
            return state;
    }
};


export const AddNewPost = (newPost:string) => {
    return {type: ADD_POST,newPost} as const;
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
export const SetUserStatus = (status: string) => {
    return {
        type: SET_USER_STATUS,
        status,
    } as const;
};
export const UpdateUserStatus = (status: string) => {
    return {
        type: UPDATE_USER_STATUS,
        status,
    } as const;
};

export const SetUserProfileThunk = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.GetUserProfile(userId)
        .then(response => {
            dispatch(SetUserProfileActionCreator(response.data));
        });
    profileAPI.GetUserStatus(userId)
        .then(response => {
            dispatch(SetUserStatus(response.data));
        });
};
export const SetUserStatusThunk = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.GetUserStatus(userId)
        .then(response => {
            dispatch(SetUserStatus(response.data));
        });
};
export const UpdateUserStatusThunk = (status: string) => (dispatch: Dispatch) => {
    profileAPI.UpdateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetUserStatus(status));
            }
        });
};
