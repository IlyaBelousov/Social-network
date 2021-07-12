import {combineReducers, createStore} from 'redux';
import {ProfileReducer} from './profile-reducer';
import {DialogsReducer} from './dialogs-reducer';

let rootReducer = combineReducers({
    profilePage:ProfileReducer,
    dialogsPage:DialogsReducer
})
export type AppStateType= ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);