import {ActionsType} from './redux-store';
import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

const SET_AUTH_DATA = 'SET_AUTH_DATA';


export type AuthDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let AuthInitialState: AuthDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const AuthReducer = (state = AuthInitialState, action: ActionsType): AuthDataType => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }
        default:
            return state;
    }
};
export const SetAuthData = (userId: number, email: string, login: string) => {
    return {
        type: SET_AUTH_DATA,
        data: {
            userId,
            email,
            login
        }
    } as const;
};
export const SetAuthDataThunk = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetAuthData(response.data.data.id, response.data.data.email, response.data.data.login));
            }
        });
};
