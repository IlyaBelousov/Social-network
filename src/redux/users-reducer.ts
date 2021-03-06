import {ActionsType} from './redux-store';
import {userAPI} from '../api/api';
import {Dispatch} from 'redux';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS';


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
    followInProgress: number[]

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
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followInProgress: [],
};

export const UsersReducer = (state = UsersInitialState, action: ActionsType): UserStateType => {
    switch (action.type) {
        case FOLLOW_IN_PROGRESS: {
            return {
                ...state,
                followInProgress: action.isFollow
                    ? [...state.followInProgress, action.id]
                    : [...state.followInProgress.filter(id => id !== action.id)],
            };
        }
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

export const FollowActionCreator = (userID: number) => {
    return {type: FOLLOW, userID} as const;
};
export const UnFollowActionCreator = (userID: number) => {
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
export const SetFollowInProgress = (isFollow: boolean, id: number) => {
    return {
        type: FOLLOW_IN_PROGRESS,
        isFollow,
        id,
    } as const;
};
export const getUsersThunk = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(SetToggleIsFetching(true));
    userAPI.GetUsers(currentPage, pageSize)
        .then(response => {
            dispatch(SetToggleIsFetching(false));
            dispatch(SetUsers(response.items));
            dispatch(SetTotalUsersCount(500));
            dispatch(SetCurrentPage(currentPage));
        });
};
export const UnFollowThunk = (id: number) => (dispatch: Dispatch) => {
    dispatch(SetFollowInProgress(true, id));
    userAPI.UnFollow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(UnFollowActionCreator(id));
            }
            dispatch(SetFollowInProgress(false, id));
        });
};
export const FollowThunk = (id: number) => (dispatch: Dispatch) => {
    dispatch(SetFollowInProgress(true, id));
    userAPI.Follow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(FollowActionCreator(id));
            }
            dispatch(SetFollowInProgress(false, id));
        });
};