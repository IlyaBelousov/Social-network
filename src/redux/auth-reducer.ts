import {ActionsType, AppStateType, AuthActionType} from './redux-store';
import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';


export type AuthDataType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean,
    isInitialised: boolean
}

let AuthInitialState: AuthDataType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isInitialised: false
};

export const AuthReducer = (state = AuthInitialState, action: ActionsType): AuthDataType => {
    switch (action.type) {
        case'AUTH/SET_AUTH_DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        }
        case "AUTH/LOG_IN": {
            return {
                ...state,
                isInitialised: action.isInitialised,
            }
        }
        default:
            return state;
    }
};
export const SetAuthData = (userId: number, email: string, login: string) => {
    return {
        type: 'AUTH/SET_AUTH_DATA',
        data: {
            userId,
            email,
            login
        }
    } as const;
};
export const LogInAC = (isInitialised: boolean) => {
    return {
        type: 'AUTH/LOG_IN',
        isInitialised,
    } as const
}
export const SetAuthDataThunk = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetAuthData(response.data.data.id, response.data.data.email, response.data.data.login));
            }
        });
};
export const LogIn = (password: string, email: string, rememberMe?: boolean): ThunkAction<void, AppStateType, unknown, AuthActionType> =>
    (dispatch) => {
        authAPI.logIn(password, email, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(LogInAC(true))
                    dispatch(SetAuthDataThunk())
                }
            })
    }
