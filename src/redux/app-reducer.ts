import {AppThunk} from "./redux-store";
import {AuthActionsType, setAuthorization} from "./auth-reducer";

const initialState = {
    isInitialised: false
}
type InitialStateType = typeof initialState
export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/INITIALISE_APP': {
            return {
                ...state,
                isInitialised: true
            }
        }
        default :
            return state
    }
}

//actions
const initialisedSucceeded = () => {
    return {
        type: 'APP/INITIALISE_APP'
    } as const
}
export type AppActionsType = ReturnType<typeof initialisedSucceeded> | AuthActionsType
//thunk

export const initialiseApp = (): AppThunk => (dispatch) => {
    const response = dispatch(setAuthorization())
    response.then(() => {
        dispatch(initialisedSucceeded())
    })
}