import {ActionsType} from './redux-store';

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


type PhotosType = {
    small: string | null
    large: string | null
}
export type UserStateType = {
    items: Array<UserDataType>
    totalCount: number
    error: null | string
    pageSize: number
    currentPage: number
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
    totalCount: 200,
    error: null,
    pageSize: 5,
    currentPage: 1
};

export const UsersReducer = (state = UsersInitialState, action: ActionsType): UserStateType => {
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
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage};
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.totalCount};
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
export const SetCurrentPageAC = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const;
};
export const SetTotalUsersCountAC = (totalCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount} as const;
};