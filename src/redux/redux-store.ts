import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {
    AddNewPostActionCreator,
    ChangeNewPostTextActionCreator,
    ProfileReducer,
    SetUserProfileActionCreator
} from './profile-reducer';
import {ChangeMessageTextActionType, DialogsReducer, SendMessageActionCreator} from './dialogs-reducer';
import {
    FollowActionCreator, SetFollowInProgress,
    SetCurrentPage,
    SetToggleIsFetching, SetTotalUsersCount, SetUsers,
    UsersReducer, UnFollowActionCreator,
} from './users-reducer';
import {AuthReducer, SetAuthData} from './auth-reducer';

export type ActionsType = ProfileActionType
    | DialogsActionType
    | UsersActionType
    | AuthActionType

export type ProfileActionType =
    ReturnType<typeof AddNewPostActionCreator>
    | ReturnType<typeof ChangeNewPostTextActionCreator>
    | ReturnType<typeof SetUserProfileActionCreator>
export type DialogsActionType =
    ReturnType<typeof SendMessageActionCreator>
    | ReturnType<typeof ChangeMessageTextActionType>


export type UsersActionType =
    ReturnType<typeof FollowActionCreator>
    | ReturnType<typeof SetUsers>
    | ReturnType<typeof SetCurrentPage>
    | ReturnType<typeof SetTotalUsersCount>
    | ReturnType<typeof SetToggleIsFetching>
    | ReturnType<typeof UnFollowActionCreator>
    | ReturnType<typeof SetFollowInProgress>

export type AuthActionType = ReturnType<typeof SetAuthData>


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));


