import {authAPI, AuthDataType} from "../api/api";
import {ActionsType, AppThunk} from "./redux-store";


const initialSate = {
    isAuth: false,
    data: {} as AuthDataType
}
type authInitialStateType = typeof initialSate
export const authReducer = (state: authInitialStateType = initialSate, action: ActionsType): authInitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_AUTH_DATA': {
            return {
                ...state,
                data: {...action.payload}
            }
        }
        case 'AUTH/SET_IS_AUTH': {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        default: {
            return state
        }
    }
}
//actions
export const setAuthData = (id: number, email: string, login: string) => {
    return {
        type: 'AUTH/SET_AUTH_DATA',
        payload: {
            id,
            email,
            login
        }
    } as const
}
export const setIsAuth = (isAuth: boolean) => {
    return {
        type: 'AUTH/SET_IS_AUTH',
        isAuth
    } as const
}
export type AuthActionsType =
    ReturnType<typeof setAuthData>
    | ReturnType<typeof setIsAuth>

//thunk

export const setAuthorization = (): AppThunk<Promise<unknown>> => dispatch => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(response.data.data.id, response.data.data.email, response.data.data.login))
                dispatch(setIsAuth(true))
            } else {
                dispatch(setIsAuth(false))
            }
        })
}
export const setLogIn = (password: string, email: string, rememberMe?: boolean): AppThunk => async dispatch => {
    try {
        const response = await authAPI.logIn(password, email, rememberMe)
        if (response.data.resultCode === 0) {
            await dispatch(setAuthorization())
        }
    } catch (e) {
        throw new Error(e)
    }
}
export const logOut = (): AppThunk => async dispatch => {
    const response = await authAPI.logOut()
    try {
        if (response.data.resultCode === 0) {
            dispatch(setIsAuth(false))
        }
    } catch (e) {
        throw new Error(e)
    }

}

