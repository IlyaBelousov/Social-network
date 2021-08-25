import {ActionsType} from './redux-store';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


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
    isFetching: boolean
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
    error: null,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
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
                            followed: true
                        };
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userID) {
                        return {
                            ...u,
                            followed: false
                        };
                    }
                    return u;
                })
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
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

export const Follow = (userID: number) => {
    return {type: FOLLOW, userID} as const;
};
export const UnFollow = (userID: number) => {
    return {type: UNFOLLOW, userID} as const;
};

export const SetUsers = (items: Array<UserDataType>) => {
    return {type: SET_USERS, items} as const;
};
export const SetCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const;
};
export const SetTotalUsersCount = (totalCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCount} as const;
};
export const SetToggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const;
};