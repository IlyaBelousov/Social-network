import {ActionsType} from './redux-store';

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';



type PhotosType = {
    small: string | null
    large: string | null
}
export type UserStateType = {
    items: Array<UserDataType>
    totalCount: number
    error: null | string
}

export type UserDataType = {
    id: number
    followed: boolean
    name: string
    photos: PhotosType
    status: string
}

let UsersInitialState: UserStateType = {
    items: [],
    totalCount: 0,
    error: null
};

export const UsersReducer = (state = UsersInitialState, action: ActionsType):UserStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: !u.followed
                        };
                    }
                    return u;
                })
            };

        }

        case SET_USERS: {
            return {...state, items: action.items};
        }
        default:
            return state;
    }
};

export const FollowAC = (userID: number) => {
    return {type: FOLLOW, userID} as const;
};

export const SetUsersAC = (items: Array<UserDataType>) => {
    return {type: SET_USERS, items} as const;
};